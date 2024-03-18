async function createAccount() {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
  const data = {
    name: 'Vanshika Soni',
    email: 'vanshika1518.be21@chitkara.edu.in',
    rollNumber: 2110991518,
    phone: 7876858388,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const result = await response.json();
  return result.accountNumber;
}


async function buyStocks(accountNumber) {
  const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
  const data = {
    company: 'Bajaj Finserv',
    currentPrice: '1578',
    accountNumber: this.accountNumber,
    githubRepoLink: 'https://github.com/VanshikaSonii'
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'bfhl-auth': 'Your roll number'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  return result;
}
async function main() {
    const accountNumber = await createAccount();
    console.log('Account Number:', accountNumber);

    const result = await buyStocks(accountNumber);
    console.log('Buy Stocks Result:', result);
  
}