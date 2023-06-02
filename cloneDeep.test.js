import cloneDeep from "./cloneDeep";

test("originObj랑 clonedObj랑 같니?", () => {
  const originObj = {
    a: "abc",
    inner: {
      arr: [1, 2, 3],
      map: new Map([["key", "value"]]),
      set: new Set([1, 2, 3]),
    },
  };

  const clonedObj = cloneDeep(originObj);

  /**
   * 참조 타입은 같은 주소값을 가리키면 원본 데이터의 변조 위험이 있다.
   * 같지 않은 경우 잘 복사가 된 것이므로 통과로 한다.
   */
  expect(clonedObj).toEqual(originObj);
  expect(clonedObj).not.toBe(originObj);
  expect(clonedObj.a).toBe(originObj.a);
  expect(clonedObj.inner).not.toBe(originObj.inner);
  expect(clonedObj.inner.arr).not.toBe(originObj.inner.arr);
  expect(clonedObj.inner.map).not.toBe(originObj.inner.map);
  expect(clonedObj.inner.set).not.toBe(originObj.inner.set);
});
