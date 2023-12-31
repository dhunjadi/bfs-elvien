export type Gymnast = {
    id: string;
    firstName: string;
    lastName: string;
    country: string;
    phone: string;
    discipline: string;
    programName: string;
    categoryName: string;
    teamName: string;
    status: string;
    date: string;
    club: string;
    dateOfBirth: string;
};

export type Country = {
    cognitoId: string;
    code: string;
    name: string;
    phoneCode: string;
    flag: string;
};
