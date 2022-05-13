module.exports = {
	title: "cloud birds",
	subtitle: "",
	description: "",
	rooturl: "https://3rivers.netlify.app",
	file: "indexcloudbirds",
	bgcolors: ["#52615E"],
	authorurl: "https://sheilapacka.com/index.html",
	author: "Sheila Packa",
	copyright: "Copyright ©2011 Sheila Packa<br/> All Rights Reserved<br/> Printed in the United States of America<br/>",
	isbn: "ISBN: 978-0-9843777-2-5<br/>Library of Congress Control Number: 2010935471<br/>",
	publisher: "Wildwood River Press",
	sections: [
		{ 
			id: "sectionfrontmatter",
			poems: ["frontmatter", "grantthanks"],
			cssclasses: ["pagenonumbers", "notoc"]
		},
		{ 
			id: "sectioninscription",
			inscription: `
				there are still other songs<br/>
				magic words learned of,<br/>
				plucked from the wayside,<br/>
				broken off from the heather,<br/>
				torn from thickets,<br/>
				dragged from saplings...<br/>
				— The Kalevala<br/>`,
			cssclasses: ["pagenonumbers", "notoc"]
		},
		{ 
			id: "sectiontoc",
			title: "Table of Contents",
			cssclasses: ["pagenonumbers", "notoc"],
			generatorf: "generateTOC",
		},
		{ 
			id: "sectionbear",
			title: "bear",
			cssclasses: ["pagestartnumbers"],
			poems: 
			[
				"thechosen",
				"spilled",
				"bear",
				"primitive",
				"cloudbirds",
				"wave",
				"red",
				"encounter",
				"roughtongue",
				"bodyofabear",
				"juneberries",
				"bodyofawoman",
				"spectrum",
				"following",
				"isntenough",
				"berries",
				"withoutthebody",
				"subboreal",
				"voice",
				"spine",
				"wild",
				"pine",
				"seasonofsleep",
				"absence",
				"honey",
				"opposites",
			]
		},
		{
			id: "sectionwing",
			title: "wing",
			poems: [
				"memorymigration",
				"travelinglight",
				"fluency",
				"rapture",
				"wasiti",
				"velocity",
				"womanriver",
				"door",
				"dozen",
				"betweentwoshores",
				"growfree",
				"coffee",
				"pretend",
				"breathe",
				"grandmotherrising",
				"in translation",
				"isoaiti",
				"blizzard",
				"thread",
				"brokenline",
				"bridge",
				"underwing",
				"peelingapples",
				"notforgotten",
				"magic",
				"myfather",
				"inthefactorycanteen",
				"casualtyoftheundergroundmine",
				"sheets",
				"banners",
				"sculpture",
				"unnamed",
			]
		},
		{
			id: "sectionmigration",
			title: "migration",
			poems: [
				"refraction",
				"love",
				"road",
				"twoworlds",
				"departuresgift",
				"acrosstheborder",
				"streetmusician",
				"ingreen",
				"migrations",
				"waking",
				"immigrant",
				"isaidi",
				"landscape",
			]
		},
		{
			id: "sectionacknowledgments",
			title: "Acknowledgments",
			poems: [
				"afterword"
			]
		},
	],
	poemids: [
	],
}
