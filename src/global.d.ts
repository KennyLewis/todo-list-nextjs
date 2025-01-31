declare module "*.svg" {
    const content: unknown;
    export default content;
  }
  
  interface Todo {
    id: string;
    label: string;
    checked: boolean;
  }
  