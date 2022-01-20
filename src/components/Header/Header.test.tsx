import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("test demo",() => {
    test("test", () => {
        render(<Header />)

        const footerText = screen.getByText("Header")

        expect(footerText).toBeTruthy()
    })
})