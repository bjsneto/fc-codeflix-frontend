import { useScroll } from "@/app/hooks/useScroll";
import { renderHook } from '@testing-library/react';
import { act } from "react";
import '@testing-library/jest-dom';

describe('useScroll', () => {
  it('should respond to scroll events', () => {
    const { result } = renderHook(() => useScroll());

    act(() => {
      global.window.scrollY = 100;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(true);

    act(() => {
      global.window.scrollY = 0;
      global.window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(false);

  });
});