import { SpeculationRules } from "react-speculation-rules";

const speculationRule = () => {
    return (
        <SpeculationRules preRenderEagerness="moderate" preFetchEagerness="moderate" hrefMatches={["/*", "/popup-component", "/filter-component"]} excludeHrefs={["/logout", "/*\\?*(^|&)add-to-cart=*", ".no-prerender"]} excludeSelectors={["[rel~=nofollow]"]} prefetchUrls={["/", "/filter-component"]}></SpeculationRules>
    );
}

export default speculationRule;