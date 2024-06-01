import React, { useEffect } from 'react'
import "./PriceList.css"
import Table from '../../Component/Table/Table'
import PriceListData from './PriceListData'
import { useLocation } from 'react-router-dom'
import RentalData from './RentalData'

const PriceList = (props) => {

    /* global dataLayer */
    const location = useLocation();

    useEffect(() => {
        document.title = props.title;

        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        let canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        } else {
            canonicalLink = document.createElement("link");
            canonicalLink.setAttribute("rel", "canonical");
            canonicalLink.setAttribute("href", canonicalUrl);
            document.head.appendChild(canonicalLink);
        }

        const description = props.descriptions;
        let metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            metaDescription.setAttribute("content", description);
            document.head.appendChild(metaDescription);
        }

        // Ensure dataLayer is initialized before the GA script loads
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }


        // Load the Google Analytics script only once
        const gaScriptId = 'ga-gtag';
        if (!document.getElementById(gaScriptId)) {
            const script = document.createElement('script');
            script.id = gaScriptId;
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S2XS9C6S8C';
            document.head.appendChild(script);

            script.onload = () => {
                gtag('js', new Date());
                gtag('config', 'G-S2XS9C6S8C');
            };
        }
    }, [props.title, props.descriptions, location.pathname]);

    const plcData1 = [
        { id: '1', description: 'Lease Rent /IFMS/FFC/PLC', rate: '700/ - PSF' },
        { id: '2', description: 'Car Parking', rate: '4.00 LAC' },
        { id: '3', description: 'Power Backup', rate: '30,000/ - Per KVA (1KVA : 250 Sq.Ft)' },
        { id: '4', description: 'Road Facing', rate: '10% of BSP' },
        { id: '5', description: 'Plaza / Atrium Facing', rate: '10% of BSP' },
        { id: '6', description: 'Corner PLC', rate: '5% of BSP' }
    ];
    const plcData = [
        { id: '1', description: 'Lease Rent /IFMS/FFC/PLC', rate: '700/ - PSF' },
        { id: '2', description: 'Car Parking', rate: '4.00 LAC' },
        { id: '3', description: 'Power Backup', rate: '30,000/ - Per KVA (1KVA : 250 Sq.Ft)' },
        { id: '4', description: 'Corner PLC', rate: '200/ PSF' },
        { id: '5', description: 'Floor PLC', rate: '300/ - PSF' }
    ];

    return (
        <div className='PriceList'>
            <div className='PriceList-main'>
                <div className="pricelist-box">
                    <h1>Price List & Payment Plan</h1>
                    <h4>Retail Spaces </h4>
                </div>
                <div className="pricelist-table">
                    <div className="list-table">
                        <h5>Preferred Location Charges</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment Price</th>
                                    <th>PLC Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plcData1.map(plc => (
                                    <tr key={plc.id}>
                                        <td>{plc.description}</td>
                                        <td>{plc.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricelist-table">
                    {RentalData.map((item, index) => (
                        <Table item={item} index={index} />
                    ))}
                </div>
            </div>
            <div className='PriceList-main'>
                <div className="pricelist-box">
                    <h4>Office Spaces </h4>
                </div>
                <div className="pricelist-table">
                    <div className="list-table">
                        <h5>Preferred Location Charges</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment Price</th>
                                    <th>PLC Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plcData.map(plc => (
                                    <tr key={plc.id}>
                                        <td>{plc.description}</td>
                                        <td>{plc.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricelist-table">
                    {PriceListData.map((item, index) => (
                        <Table item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceList
