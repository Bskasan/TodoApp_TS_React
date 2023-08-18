interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunc = (text: string) => void;

type ToggleFunc = (item: TodoType) => void;

type DeleteFunc = (id: string | number) => void;
