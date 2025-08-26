using {
    cuid,
    managed
} from '@sap/cds/common';

namespace bookshop;


entity Books : cuid, managed {
    title : localized String;
    descr : localized String;
}

annotate Books with @(
    UI.SelectionFields: [title],
    Capabilities      : {FilterRestrictions: {RequiredProperties: [title], }}
);
