import SearchLayoutHeader from '@/components/SearchComponents/SearchLayoutHeader';
import React from 'react'
import SubmitForm from './SubmitForm/SubmitForm';
import InstrumentData from './Datatable/InstrumentData';

export const metadata = {
    title: "FPR - Instrument",
    description: "Generated by create next app",
};
function INSTRUMENT() {
    return (
        <>
            <SearchLayoutHeader title={"Instrument Search"} />
            <SubmitForm />
            <InstrumentData />
        </>
    )
}

export default INSTRUMENT