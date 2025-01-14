import IFetchApi from '../interface/IFetchApi';

/**
 * @abstract class BaseFetchApi - Fetch라이브러리를 구현하는 추상 클래스
 */
export default abstract class<T> implements IFetchApi<T> {
  protected baseUrl: string;
  protected defaultHeader: Record<string, string>;
  protected controller?: AbortController;
  protected timeout?: number;
  /**
   * @constructor
   * @param {string} baseUrl - 기본 URL
   * @param {Record<string, string>} defaultHeader - 기본 헤더
   * @param {number} timeout - 타임아웃 시간
   */
  constructor(baseUrl: string, defaultHeader: Record<string, string>, timeout?: number) {
    this.baseUrl = baseUrl;
    this.defaultHeader = defaultHeader;
    this.timeout = timeout;
  }

  // 타임아웃 설정 메서드
  setTimeout(ms: number): void {
    this.timeout = ms;
  }

  /**
   * 요청 취소 기능
   */
  abortRequest(): void {
    if (this.controller) {
      this.controller.abort();
      this.controller = undefined;
    }
  }

  /**
   * 구체적인 구현은 상속받는 클래스에서 처리
   */
  abstract request(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    body?: object,
    header?: object,
    credential?: boolean
  ): Promise<T>;
}
