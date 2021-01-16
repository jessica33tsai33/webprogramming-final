const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating a schema, sort of like working with an ORM
const CompanyInfoSchema = new Schema({
	companyName: {
		type: String,
	},
	companyNumber: {
		type: String,
	},
	companyIndustry: {
		type: String,
	},
	annualTurnover: {
		type: Number,
	},
	levelofGovernance: {
		type: String,
	},
	EPS: {
		type: Number,
	},
	ROE: {
		type: Number,
	},
	annualWaterUsage: {
		type: Number,
	},
	annualWaterReturn: {
		type: Number,
	},
	scope1: {
		type: Number,
	},
	scope2: {
		type: Number,
	},
	scope3: {
		type: Number,
	},
	waste: {
		type: Number,
	},
	societyExpense: {
		type: Number,
	},
	societyPerformance: {
		type: Number,
	},
	volunteer: {
		type: Number,
	},
	guarantee: {
		type: String,
	},
	guaranteeAgency: {
		type: String,
	}
})

// Creating a table within database with the defined schema
const CompanyInfo = mongoose.model('companyInfo', CompanyInfoSchema)

// Exporting table for querying and mutating
module.exports = CompanyInfo
