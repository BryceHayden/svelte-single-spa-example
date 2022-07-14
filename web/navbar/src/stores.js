import { writable } from "svelte/store";

export const jsonWebToken = writable(localStorage.getItem("token"));
