import { createAsyncComponent } from "react-async-component";
import * as React from "react";
import { Spinner } from "../../shared/components/spinner/index";

export const AsyncHome = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./home").HomeComponent);
        }, "home")),
    defer: true,
    ssrMode: "defer",
    Loading: (prop) => <Spinner userAgent={userAgent} />
});
