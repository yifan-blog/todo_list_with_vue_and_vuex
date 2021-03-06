import Vue from 'vue';
import mutations from './mutations';
import * as types from './mutations_type.js';

export const addTodo = ({ commit }, newTodoText) => {
  commit(types.ADDTODO, newTodoText);
}

export const deleteTodo = ({ commit }, index) => {
  commit(types.DELETETODO, index);
}

export const updateTodo = ({ commit }, payload) => {
  commit(types.UPDATETODO, payload);
}

export const editTodo = ({ commit }, todo) => {
  commit(types.EDITTODO, todo);
}

export const updateStatus = ({ commit }, payload) => {
  commit(types.UPDATESTATUS, payload);
}

export const setFilter = ({ commit }, filter) => {
  commit(types.SETFILTER, filter);
}