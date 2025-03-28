import React from "react";
import ReactDOM from "react-dom/client";
import "./index.tailwind.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BaseLayout } from "./layouts/base_layout";
import { DirectoryPage } from "./pages/directory/directory_page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<BaseLayout>
				<DirectoryPage />
			</BaseLayout>
		</QueryClientProvider>
	</React.StrictMode>,
);
