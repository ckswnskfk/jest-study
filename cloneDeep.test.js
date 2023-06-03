import cloneDeep from "./cloneDeep";

describe("내가 만든 cloneDeep과 structuredClone()의 비교", () => {
  const originObj = {
    a: "abc",
    inner: {
      arr: [1, 2, 3],
      map: new Map([["key", "value"]]),
      set: new Set([1, 2, 3]),
    },
  };

  const clonedObj = cloneDeep(originObj);
  const clonedByStructuredClone = structuredClone(originObj);

  test("originObj와 clonedObj의 속성이 같은 값을 가지는 지?", () => {
    expect(clonedObj).toStrictEqual(originObj);
  });

  test("originObj와 clonedObj의 속성중 참조 타입인 값들이 같은 주소값을 가리키지는 않는지?", () => {
    expect(clonedObj).not.toBe(originObj);
    expect(clonedObj.inner).not.toBe(originObj.inner);
    expect(clonedObj.inner.arr).not.toBe(originObj.inner.arr);
    expect(clonedObj.inner.map).not.toBe(originObj.inner.map);
    expect(clonedObj.inner.set).not.toBe(originObj.inner.set);
  });

  test("originObj와 clonedByStructuredClone의 속성이 같은 값을 가지는 지?", () => {
    /**
     * structuredClone은 toStrictEqual 로 검사했을 때 항상 fail 한다.
     * 한 편, 일반 객체나 배열만 복사해 toEqual로 검사하면 pass 한다.
     * 하지만 Map 이나 Set 타입을 복사해 toEqual로 검사하면 fail 한다.
     * 이유는 잘 모르겠다..
     */
    expect(clonedByStructuredClone).toStrictEqual(originObj);
  });

  test("originObj와 clonedByStructuredClone의 속성중 참조 타입인 값들이 같은 주소값을 가리키지는 않는지?", () => {
    expect(clonedByStructuredClone).not.toBe(originObj);
    expect(clonedByStructuredClone.inner).not.toBe(originObj.inner);
    expect(clonedByStructuredClone.inner.arr).not.toBe(originObj.inner.arr);
    expect(clonedByStructuredClone.inner.map).not.toBe(originObj.inner.map);
    expect(clonedByStructuredClone.inner.set).not.toBe(originObj.inner.set);
  });
});
