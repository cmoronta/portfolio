import { Box, BoxProps, Text } from "@chakra-ui/react";
import {
	Annotation,
	ComposableMap,
	Geographies,
	Geography,
} from "react-simple-maps";
import { chakra } from "@chakra-ui/system";

const ChakraGeography = chakra(Geography);

export default function Map(props: BoxProps) {
	const geoURL: string =
		"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/GA-13-georgia-counties.json";

	return (
		<Box height="100%">
			<ComposableMap
				projectionConfig={{ scale: 8000, center: [-83.5, 32.8] }}
				style={{ height: "100%", width: "100%" }}
			>
				<Geographies geography={geoURL}>
					{({ geographies }) =>
						geographies.map((geo) => (
							<ChakraGeography
								fill={"#FFA3A5"}
								stroke="#FFF"
								key={geo.rsmKey}
								geography={geo}
							/>
						))
					}
				</Geographies>
				<Annotation
					subject={[-83.9007, 33.839]}
					dx={90}
					dy={-80}
					connectorProps={{
						stroke: "#000000",
						strokeWidth: 2,
						strokeLinecap: "butt",
					}}
				>
					<text fontSize={24} fontFamily="bold">
						I am here
					</text>
				</Annotation>
			</ComposableMap>
		</Box>
	);
}
