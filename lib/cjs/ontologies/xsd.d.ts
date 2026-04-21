export declare const loadData: () => Promise<{
    "@context": {
        xsd: string;
        rdf: string;
        rdfs: string;
        owl: string;
        dc: string;
    };
    "@graph": ({
        "@id": string;
        "@type": string;
        "dc:title": string;
        "dc:description": string;
        "rdfs:subClassOf"?: undefined;
        "rdfs:isDefinedBy"?: undefined;
        "rdfs:label"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": string;
        "dc:title"?: undefined;
        "dc:description"?: undefined;
    })[];
}>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Bytes: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const string: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const boolean: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const long: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const integer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const time: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const duration: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const decimal: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const gYear: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const anyURI: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const xsd: {
    _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Bytes: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    string: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    boolean: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    long: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    integer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    time: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    duration: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    decimal: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    gYear: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    anyURI: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
