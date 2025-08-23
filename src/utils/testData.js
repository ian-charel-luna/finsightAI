// export const simulations = [
// 		{
// 			id: 1,
// 			name: "MSME Credit Scoring",
// 			segment: "Lending MSMEs",
// 			marketFitScore: 8.2,
// 			riskLevel: "low",
// 			complianceStatus: "passed",
// 			lastUpdated: "2 days ago",
// 		},
// 		{
// 			id: 2,
// 			name: "Invoice Financing Platform",
// 			segment: "Supply Chain Finance",
// 			marketFitScore: 7.5,
// 			riskLevel: "medium",
// 			complianceStatus: "pending",
// 			lastUpdated: "1 week ago",
// 		},
// 		{
// 			id: 3,
// 			name: "Microloan Auto-Approval Engine",
// 			segment: "Retail MSMEs",
// 			marketFitScore: 6.9,
// 			riskLevel: "high",
// 			complianceStatus: "failed",
// 			lastUpdated: "5 days ago",
// 		},
// 		{
// 			id: 4,
// 			name: "Agri Credit Risk Model",
// 			segment: "Agriculture Lending",
// 			marketFitScore: 9.1,
// 			riskLevel: "low",
// 			complianceStatus: "passed",
// 			lastUpdated: "3 days ago",
// 		},
// 		{
// 			id: 5,
// 			name: "AI Credit Recommendation Assistant",
// 			segment: "Loan Advisory",
// 			marketFitScore: 8.7,
// 			riskLevel: "medium",
// 			complianceStatus: "pending",
// 			lastUpdated: "Yesterday",
// 		},
// 	];


export const simulations = JSON.parse(
	(await fetch('/api/get-all-sims', {
		port: 40443, // change this
	})).json().values()
);