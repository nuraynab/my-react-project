import {LEADERS} from "../shared/leaders";
import {actions} from "react-redux-form";

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        default:
            return state;
    }
}