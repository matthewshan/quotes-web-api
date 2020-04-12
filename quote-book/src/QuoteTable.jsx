import React from 'react';

const apiURL = ''

function QuoteItem({quote}) {
    return <tr>
        <td>{quote.Quote}</td>
        <td>{quote.Person}</td>
        <td>{quote.DateAdded}</td>
    </tr>;
}

function QuotesTable({quotes}) {
    console.log(quotes)
    return <div className="table-responsive text-left col-lg-8 border p-4 ">
        <h1>Quotes</h1>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <td><b>Quote</b></td>
                    <td><b>By</b></td>
                    <td><b>DateAdded</b></td>
                </tr>
            </thead>
            <tbody>
                {quotes.map((quote) => (
                    <QuoteItem quote={quote} />
                ))}
            </tbody>
        </table>
    </div>;
}

export default function QuoteTable() {

    let [quotesList, setQuotesList] = React.useState([]); 

    let getQuotes = () => {
        fetch(`${apiURL}/api/getQuotes`).then(response => {
            return response.json();
        }).then(payload => {    
          setQuotesList(payload);
        });
    };
    
    React.useEffect(() => getQuotes(), []);

    return <div style={{ width:"95%", margin: "0 auto", marginTop: "90px"}}>
        <div className="row">
            <QuotesTable quotes={quotesList}/>
        </div>
    </div>;
}