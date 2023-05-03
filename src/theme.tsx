import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato/400.css";

const theme = extendTheme({
	fonts: {
		heading: `'Lato', sans-serif`,
		body: `'Lato', sans-serif`,
	},
});

export default theme;
