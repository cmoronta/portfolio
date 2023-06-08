import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

const theme = extendTheme({
	fonts: {
		heading: `Montserrat, sans-serif`,
		body: `Montserrat, sans-serif`,
	},
});

export default theme;
