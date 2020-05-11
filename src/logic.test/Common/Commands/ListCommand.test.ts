import { ListCommand } from "../../../logic/Common/Commands/ListCommand";
import { ICommand } from "../../../logic/Common/Commands/ICommand";
import { mock, verify, instance } from "ts-mockito";


suite("ListCommand", () => {

    test("Execute should execute added command", () => {
        const listCommand: ListCommand = new ListCommand("List");
        let mockedCommand: ICommand = mock<ICommand>();
        let instanceMockedCommand: ICommand = instance(mockedCommand);

        listCommand.Add(instanceMockedCommand);
        listCommand.Execute();

        verify(mockedCommand.Execute()).once();
    });

    test("Execute should execute commands which are added twice, once", () => {
        const listCommand: ListCommand = new ListCommand("List");
        let mockedCommand: ICommand = mock<ICommand>();
        let instanceMockedCommand: ICommand = instance(mockedCommand);
        instanceMockedCommand.Name = "Test";

        listCommand.Add(instanceMockedCommand);
        listCommand.Add(instanceMockedCommand);

        listCommand.Execute();

        verify(mockedCommand.Execute()).once();
    });
});