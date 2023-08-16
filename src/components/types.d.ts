interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

type AddFunc = (text: string) => void;
