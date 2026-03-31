import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("TOKEN_PREFIX", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("defaults to 'ogds' when TOKEN_PREFIX is not set", async () => {
    const { default: config } = await import("./style-dictionary.config.js");
    expect(config.platforms.scss.prefix).toBe("ogds");
    expect(config.platforms.css.prefix).toBe("ogds");
  });

  it("uses TOKEN_PREFIX when set", async () => {
    vi.stubEnv("TOKEN_PREFIX", "usa");
    const { default: config } = await import("./style-dictionary.config.js");
    expect(config.platforms.scss.prefix).toBe("usa");
    expect(config.platforms.css.prefix).toBe("usa");
  });
});
