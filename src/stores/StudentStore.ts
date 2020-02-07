import { createContext, useContext } from "react";
import { observable, action, computed } from "mobx";

import Student from "../models/Student";
import sleep from "../utils/sleep";

class StudentStore {
  @observable studends: Student[];
  @observable loading: boolean;
  capacity: number;

  constructor() {
    this.studends = [];
    this.loading = false;
    this.capacity = 15;
  }

  @computed
  get freePlaces() {
    return this.capacity - this.studends.length;
  }

  @action.bound
  async addStudent(std: Student) {
    this.loading = true;

    // simulating a call to backend to add it
    await sleep(1500);

    // add it to front
    if (this.freePlaces !== 0) {
      this.studends.push(std);
      console.log("Added");
    }

    this.loading = false;
  }
}
const studentStore = new StudentStore();

export default function useStudentStore() {
  return useContext(createContext(studentStore));
}
