import { describe, it } from "node:test";
import { Button } from "./Button";
import { render } from "@testing-library/react";

describe('Button', () => {
    it('should render', () => {
        render(<Button>Test</Button>)});
});
    