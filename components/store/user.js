import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
    key: "userState",
    default: {
        uid: "",
        email: "",
        userName: "",
        photoURL: "",
    },
    effects_UNSTABLE: [persistAtom],
});
