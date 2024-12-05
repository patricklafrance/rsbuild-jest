import { myDefineConfig } from "../src/myDefineConfig";

test("my test", () => {
    const config = myDefineConfig();

    expect(config).toMatchSnapshot();
});
