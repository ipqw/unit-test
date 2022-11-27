import { it, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

import { Provider } from "react-redux";

import { initStore } from "../../src/client/store.ts";
import { ExampleApi, CartApi } from "../../src/client/api";
import { Application } from "../../src/client/Application.tsx";


it('тест', () => {
    const history = createMemoryHistory({
        initialEntries: ["/"],
        initialIndex: 0,
    });
    const basename = "/hw/store";

    const api = new ExampleApi(basename);
    const cart = new CartApi();
    const store = initStore(api, cart);

    const application = (
        <Router history={history}>
            <Provider store={store}>
                <Application />
            </Provider>
        </Router>
    );

    const { getByTestId } = render(application);

    expect(getByTestId("page-title").textContent).toEqual("Example store");
});
