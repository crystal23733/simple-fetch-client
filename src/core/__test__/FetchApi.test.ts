import FetchApi from '../FetchApi';

describe('FetchApi 테스트', () => {
  let api: FetchApi<any>;
  
  beforeEach(() => {
    api = new FetchApi('https://test-api.com');
  });

  // GET 요청 성공 테스트
  test('GET 요청이 성공하면 데이터를 반환해요', async () => {
    const mockData = { name: '테스트' };
    
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const result = await api.request('/test', 'GET');
    expect(result).toEqual(mockData);
  });

  // 서버 에러 테스트
  test('서버 에러가 발생하면 에러를 던져요', async () => {
    const errorMessage = '서버 에러';
    
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      statusText: errorMessage,
      json: () => Promise.resolve({ message: errorMessage }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    await expect(api.request('/test', 'GET')).rejects.toThrow(errorMessage);
  });

  // 요청 취소 테스트
  test('요청 취소가 잘 동작하나요?', () => {
    api.abortRequest();
    expect(api['controller']).toBeUndefined();
  });
});