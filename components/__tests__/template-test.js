import renderer from "react-test-renderer";
import Template from "../template";

test("it should have 1 child", () => {
  /*   const allQuestions = ["q1", "q2"];
  const mockFn = jest.fn();
  const answerInputs = screen.getAllByLabelText("answer input");

  fireEvent.changeText(answerInputs[0], "a1");
  fireEvent.changeText(answerInputs[1], "a2");
  fireEvent.press(screen.getByText("Submit"));

  expect(mockFn).toBeCalledWith({
    1: { q: "q1", a: "a1" },
    2: { q: "q2", a: "a2" },
  }); */

  const tree = renderer.create(<Template />).toJSON();
  expect(tree.children.length).toBe(1);
});
