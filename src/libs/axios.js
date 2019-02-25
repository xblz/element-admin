import http from 'axios';
import { Loading } from 'element-ui';

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  getInsideConfig() {
    return {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    };
  }

  request(options) {
    const instance = http.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }

  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      Loading.service({}).close();
    }
  }

  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加loading
        if (!Object.keys(this.queue).length) {
          Loading.service({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        }
        this.queue[url] = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        this.destroy(url);
        const { data, status } = res;
        return { data, status };
      },
      (error) => {
        this.destroy(url);
        let errorInfo = error.response;
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config
          } = JSON.parse(JSON.stringify(error));

          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url }
          };
        }
        return Promise.reject(error);
      }
    );
  }
}

export default new HttpRequest();
