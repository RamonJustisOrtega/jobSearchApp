export const getFirstColFrmTwoColArray = (twoColArray) => {
    let oneColArray = [];
    for (let i = 0 ; i < twoColArray.length; i++) {oneColArray[i] = twoColArray[i][0]}
    return oneColArray;
}

export const listCompanies = (array) => {
    let companyArray=[];
    for (let i = 0; i < array.length; i++) {companyArray[i] = array[i].company_name}
    return companyArray;
}
 
export const companyFrequency = (jobArray) => {
    let counter = {};
    for (const element of jobArray) {
        if (counter[element]) {counter[element] += 1;} 
        else {counter[element] = 1;}
    };
    const freqArray = Object.entries(counter);
    return freqArray;
}

export const sortFreqLargeToSmall = (freqArray) => {
    return freqArray.sort((a,b) => b[1]-a[1]);
}

export const findCompanyJobs = (company, jobObject) => {
    let jobArray = [];
    for (let i=0; i < jobObject.length; i++) {
        if (company == jobObject[i].company_name) {
        jobArray.push([
            jobObject[i].title, 
            jobObject[i].company.country,
            jobObject[i].company.remote_level,
            jobObject[i].company.logo_url,
            jobObject[i].url
        ]);
        } 
    }
    console.log(jobArray);
    return jobArray;
}
