import { myDefineConfig } from "../src/myDefineConfig.ts";

test("my test", () => {
    const config = myDefineConfig();

    expect(config).toMatchSnapshot();
});
