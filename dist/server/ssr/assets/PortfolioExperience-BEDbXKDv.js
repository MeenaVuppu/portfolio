import { C as __commonJSMin, S as stripBasePath, _ as isDangerousScheme, a as getPrefetchedUrls, b as VINEXT_MOUNTED_SLOTS_HEADER, d as createRscRequestUrl, g as withBasePath, h as toSameOriginAppPath, i as getMountedSlotsHeader, l as useRouter, m as toBrowserNavigationHref, n as getCurrentInterceptionContext, o as navigateClientSide, p as resolveRelativeHref, s as prefetchRscResponse, t as require_jsx_runtime, u as createRscRequestHeaders, v as AppElementsWire, w as __toESM, x as hasBasePath, y as require_react } from "../index.js";
import { a as getDomainLocaleUrl, i as addLocalePrefix, n as appendSearchParamsToUrl, r as urlQueryToSearchParams } from "./query-DGHsJKv-.js";
//#region app/lib/projects.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var projects = [
	{
		slug: "digital-gold",
		pegboardTheme: {
			board: "#F7E8A4",
			holes: "#C8B96F"
		},
		eyebrow: "Muthoot · Product redesign",
		title: "Digital Gold",
		description: "Placeholder for a sharper story about redesigning a high-trust investment experience.",
		metric: "+32%",
		metricLabel: "impact metric placeholder",
		category: "Digital Gold · Investment experience",
		headline: "Redesigning digital gold around trust and clarity.",
		metadata: [
			"Product designer",
			"Product redesign",
			"Fintech"
		],
		stats: [
			{
				value: "Redesign",
				label: "Investment experience"
			},
			{
				value: "Muthoot",
				label: "Product context"
			},
			{
				value: "[Real metric]",
				label: "Business / product impact"
			}
		],
		opportunity: {
			title: "Making a high-trust product easier to understand.",
			body: "Placeholder for the sharpest opportunity: where the existing investment experience created uncertainty and what a clearer journey needed to unlock."
		},
		problem: {
			title: "Trust had to be designed into every decision.",
			body: "Placeholder for the user and business tension that made this redesign matter, expressed as one concise product problem."
		},
		decisions: [{
			title: "Clarify the investment journey",
			body: "Placeholder for the strongest information or interaction decision that reduced ambiguity."
		}, {
			title: "Surface confidence at key moments",
			body: "Placeholder for the decision that helped users understand value, risk, or next steps."
		}],
		solution: {
			title: "A clearer path from intent to investment.",
			body: "Placeholder for the final experience and the one product visual that best communicates the redesign."
		},
		impact: {
			title: "A stronger, more legible investment experience.",
			body: "Impact metric placeholder. Replace this with the verified business and user outcome when available."
		}
	},
	{
		slug: "vyapar-plus",
		pegboardTheme: {
			board: "#C9DCE3",
			holes: "#91AEB9"
		},
		eyebrow: "Muthoot · Kirana earning platform",
		title: "Vyapar Plus",
		description: "Placeholder for a business-facing platform story led from zero to one.",
		metric: "0 → 1",
		metricLabel: "Sole Product Designer · impact metric placeholder",
		category: "Vyapar Plus · Kirana fintech",
		headline: "Designing a kirana commission platform from 0 → 1.",
		metadata: [
			"Sole product designer",
			"0→1 product",
			"Fintech"
		],
		stats: [
			{
				value: "0 → 1",
				label: "Product built from scratch"
			},
			{
				value: "1",
				label: "Sole product designer"
			},
			{
				value: "[Real metric]",
				label: "Business / product impact"
			}
		],
		opportunity: {
			title: "Turn a new business model into a usable product.",
			body: "Placeholder for the market and product opportunity behind the kirana commission platform, kept focused on the reason the product needed to exist."
		},
		problem: {
			title: "A new platform had to make earning feel clear and dependable.",
			body: "Placeholder for the core user and business tension that shaped the zero-to-one product direction."
		},
		decisions: [{
			title: "Make commission logic legible",
			body: "Placeholder for the decision that made complex earning rules easier to understand and act on."
		}, {
			title: "Design for repeat use",
			body: "Placeholder for the workflow decision that supported a dependable day-to-day product habit."
		}],
		solution: {
			title: "One focused platform for earning and tracking.",
			body: "Placeholder for the final product experience and the major visual that best explains how it works."
		},
		impact: {
			title: "From an idea to a product ready to create value.",
			body: "Impact metric placeholder. Replace this with the verified launch, business, or user outcome when available."
		}
	},
	{
		slug: "hives",
		pegboardTheme: {
			board: "#CDD9C5",
			holes: "#97AA8D"
		},
		eyebrow: "Bumble · Concept feature",
		title: "Hives",
		description: "Placeholder for a concept feature that explores smaller social contexts inside Bumble.",
		metric: "+18%",
		metricLabel: "predicted impact metric placeholder",
		category: "Hives · Bumble concept feature",
		headline: "Designing smaller social contexts inside Bumble.",
		metadata: [
			"Concept project",
			"Feature design",
			"Social"
		],
		stats: [
			{
				value: "Concept",
				label: "Feature exploration"
			},
			{
				value: "Bumble",
				label: "Product context"
			},
			{
				value: "[Target metric]",
				label: "Predicted / target impact",
				isForecast: true
			}
		],
		opportunity: {
			title: "Move from matching toward a shared context.",
			body: "Placeholder for the concept opportunity: how smaller social settings could help people discover and connect with more intention."
		},
		problem: {
			title: "A match alone does not create momentum.",
			body: "Placeholder for the behavioural gap the concept explores. This project should frame any future outcome as predicted, not observed."
		},
		decisions: [{
			title: "Start with a shared context",
			body: "Placeholder for the concept decision that gives people a clearer reason to participate."
		}, {
			title: "Keep discovery lightweight",
			body: "Placeholder for the decision that balances social possibility with a low-pressure experience."
		}],
		solution: {
			title: "A concept for discovering people through smaller groups.",
			body: "Placeholder for the concept experience and the major product visual that best communicates the direction."
		},
		impact: {
			title: "A testable direction for deeper engagement.",
			body: "Predicted impact placeholder only. Replace with a clearly labelled target or forecast when the concept is validated."
		}
	}
];
function getProject(slug) {
	return projects.find((project) => project.slug === slug);
}
function getOtherProjects(slug) {
	return projects.filter((project) => project.slug !== slug);
}
//#endregion
//#region node_modules/vinext/dist/shims/image-config.js
var import_ipaddr = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root) {
		"use strict";
		const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
		const ipv4Regexes = {
			fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
			threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
			twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
			longValue: new RegExp(`^${ipv4Part}$`, "i")
		};
		const octalRegex = new RegExp(`^0[0-7]+$`, "i");
		const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
		const zoneIndex = "%[0-9a-z]{1,}";
		const ipv6Part = "(?:[0-9a-f]+::?)+";
		const ipv6Regexes = {
			zoneIndex: new RegExp(zoneIndex, "i"),
			"native": new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
			deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
			transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
		};
		function expandIPv6(string, parts) {
			if (string.indexOf("::") !== string.lastIndexOf("::")) return null;
			let colonCount = 0;
			let lastColon = -1;
			let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
			let replacement, replacementCount;
			if (zoneId) {
				zoneId = zoneId.substring(1);
				string = string.replace(/%.+$/, "");
			}
			while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) colonCount++;
			if (string.substr(0, 2) === "::") colonCount--;
			if (string.substr(-2, 2) === "::") colonCount--;
			if (colonCount > parts) return null;
			replacementCount = parts - colonCount;
			replacement = ":";
			while (replacementCount--) replacement += "0:";
			string = string.replace("::", replacement);
			if (string[0] === ":") string = string.slice(1);
			if (string[string.length - 1] === ":") string = string.slice(0, -1);
			parts = (function() {
				const ref = string.split(":");
				const results = [];
				for (let i = 0; i < ref.length; i++) results.push(parseInt(ref[i], 16));
				return results;
			})();
			return {
				parts,
				zoneId
			};
		}
		function matchCIDR(first, second, partSize, cidrBits) {
			if (first.length !== second.length) throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
			let part = 0;
			let shift;
			while (cidrBits > 0) {
				shift = partSize - cidrBits;
				if (shift < 0) shift = 0;
				if (first[part] >> shift !== second[part] >> shift) return false;
				cidrBits -= partSize;
				part += 1;
			}
			return true;
		}
		function parseIntAuto(string) {
			if (hexRegex.test(string)) return parseInt(string, 16);
			if (string[0] === "0" && !isNaN(parseInt(string[1], 10))) {
				if (octalRegex.test(string)) return parseInt(string, 8);
				throw new Error(`ipaddr: cannot parse ${string} as octal`);
			}
			return parseInt(string, 10);
		}
		function padPart(part, length) {
			while (part.length < length) part = `0${part}`;
			return part;
		}
		const ipaddr = {};
		ipaddr.IPv4 = (function() {
			function IPv4(octets) {
				if (octets.length !== 4) throw new Error("ipaddr: ipv4 octet count should be 4");
				let i, octet;
				for (i = 0; i < octets.length; i++) {
					octet = octets[i];
					if (!(0 <= octet && octet <= 255)) throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
				}
				this.octets = octets;
			}
			IPv4.prototype.SpecialRanges = {
				unspecified: [[new IPv4([
					0,
					0,
					0,
					0
				]), 8]],
				broadcast: [[new IPv4([
					255,
					255,
					255,
					255
				]), 32]],
				multicast: [[new IPv4([
					224,
					0,
					0,
					0
				]), 4]],
				linkLocal: [[new IPv4([
					169,
					254,
					0,
					0
				]), 16]],
				loopback: [[new IPv4([
					127,
					0,
					0,
					0
				]), 8]],
				carrierGradeNat: [[new IPv4([
					100,
					64,
					0,
					0
				]), 10]],
				"private": [
					[new IPv4([
						10,
						0,
						0,
						0
					]), 8],
					[new IPv4([
						172,
						16,
						0,
						0
					]), 12],
					[new IPv4([
						192,
						168,
						0,
						0
					]), 16]
				],
				reserved: [
					[new IPv4([
						192,
						0,
						0,
						0
					]), 24],
					[new IPv4([
						192,
						0,
						2,
						0
					]), 24],
					[new IPv4([
						192,
						88,
						99,
						0
					]), 24],
					[new IPv4([
						198,
						18,
						0,
						0
					]), 15],
					[new IPv4([
						198,
						51,
						100,
						0
					]), 24],
					[new IPv4([
						203,
						0,
						113,
						0
					]), 24],
					[new IPv4([
						240,
						0,
						0,
						0
					]), 4]
				],
				as112: [[new IPv4([
					192,
					175,
					48,
					0
				]), 24], [new IPv4([
					192,
					31,
					196,
					0
				]), 24]],
				amt: [[new IPv4([
					192,
					52,
					193,
					0
				]), 24]]
			};
			IPv4.prototype.kind = function() {
				return "ipv4";
			};
			IPv4.prototype.match = function(other, cidrRange) {
				let ref;
				if (cidrRange === void 0) {
					ref = other;
					other = ref[0];
					cidrRange = ref[1];
				}
				if (other.kind() !== "ipv4") throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
				return matchCIDR(this.octets, other.octets, 8, cidrRange);
			};
			IPv4.prototype.prefixLengthFromSubnetMask = function() {
				let cidr = 0;
				let stop = false;
				const zerotable = {
					0: 8,
					128: 7,
					192: 6,
					224: 5,
					240: 4,
					248: 3,
					252: 2,
					254: 1,
					255: 0
				};
				let i, octet, zeros;
				for (i = 3; i >= 0; i -= 1) {
					octet = this.octets[i];
					if (octet in zerotable) {
						zeros = zerotable[octet];
						if (stop && zeros !== 0) return null;
						if (zeros !== 8) stop = true;
						cidr += zeros;
					} else return null;
				}
				return 32 - cidr;
			};
			IPv4.prototype.range = function() {
				return ipaddr.subnetMatch(this, this.SpecialRanges);
			};
			IPv4.prototype.toByteArray = function() {
				return this.octets.slice(0);
			};
			IPv4.prototype.toIPv4MappedAddress = function() {
				return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
			};
			IPv4.prototype.toNormalizedString = function() {
				return this.toString();
			};
			IPv4.prototype.toString = function() {
				return this.octets.join(".");
			};
			return IPv4;
		})();
		ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
			try {
				const cidr = this.parseCIDR(string);
				const ipInterfaceOctets = cidr[0].toByteArray();
				const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				const octets = [];
				let i = 0;
				while (i < 4) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error("ipaddr: the address does not have IPv4 CIDR format");
			}
		};
		ipaddr.IPv4.isIPv4 = function(string) {
			return this.parser(string) !== null;
		};
		ipaddr.IPv4.isValid = function(string) {
			try {
				new this(this.parser(string));
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv4.isValidCIDR = function(string) {
			try {
				this.parseCIDR(string);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv4.isValidFourPartDecimal = function(string) {
			if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return true;
			else return false;
		};
		ipaddr.IPv4.isValidCIDRFourPartDecimal = function(string) {
			const match = string.match(/^(.+)\/(\d+)$/);
			if (!ipaddr.IPv4.isValidCIDR(string) || !match) return false;
			return ipaddr.IPv4.isValidFourPartDecimal(match[1]);
		};
		ipaddr.IPv4.networkAddressFromCIDR = function(string) {
			let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
			try {
				cidr = this.parseCIDR(string);
				ipInterfaceOctets = cidr[0].toByteArray();
				subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				octets = [];
				i = 0;
				while (i < 4) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error("ipaddr: the address does not have IPv4 CIDR format");
			}
		};
		ipaddr.IPv4.parse = function(string) {
			const parts = this.parser(string);
			if (parts === null) throw new Error("ipaddr: string is not formatted like an IPv4 Address");
			return new this(parts);
		};
		ipaddr.IPv4.parseCIDR = function(string) {
			let match;
			if (match = string.match(/^(.+)\/(\d+)$/)) {
				const maskLength = parseInt(match[2]);
				if (maskLength >= 0 && maskLength <= 32) {
					const parsed = [this.parse(match[1]), maskLength];
					Object.defineProperty(parsed, "toString", { value: function() {
						return this.join("/");
					} });
					return parsed;
				}
			}
			throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
		};
		ipaddr.IPv4.parser = function(string) {
			let match, part, value;
			if (match = string.match(ipv4Regexes.fourOctet)) return (function() {
				const ref = match.slice(1, 6);
				const results = [];
				for (let i = 0; i < ref.length; i++) {
					part = ref[i];
					results.push(parseIntAuto(part));
				}
				return results;
			})();
			else if (match = string.match(ipv4Regexes.longValue)) {
				value = parseIntAuto(match[1]);
				if (value > 4294967295 || value < 0) throw new Error("ipaddr: address outside defined range");
				return (function() {
					const results = [];
					let shift;
					for (shift = 0; shift <= 24; shift += 8) results.push(value >> shift & 255);
					return results;
				})().reverse();
			} else if (match = string.match(ipv4Regexes.twoOctet)) return (function() {
				const ref = match.slice(1, 4);
				const results = [];
				value = parseIntAuto(ref[1]);
				if (value > 16777215 || value < 0) throw new Error("ipaddr: address outside defined range");
				results.push(parseIntAuto(ref[0]));
				results.push(value >> 16 & 255);
				results.push(value >> 8 & 255);
				results.push(value & 255);
				return results;
			})();
			else if (match = string.match(ipv4Regexes.threeOctet)) return (function() {
				const ref = match.slice(1, 5);
				const results = [];
				value = parseIntAuto(ref[2]);
				if (value > 65535 || value < 0) throw new Error("ipaddr: address outside defined range");
				results.push(parseIntAuto(ref[0]));
				results.push(parseIntAuto(ref[1]));
				results.push(value >> 8 & 255);
				results.push(value & 255);
				return results;
			})();
			else return null;
		};
		ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
			prefix = parseInt(prefix);
			if (prefix < 0 || prefix > 32) throw new Error("ipaddr: invalid IPv4 prefix length");
			const octets = [
				0,
				0,
				0,
				0
			];
			let j = 0;
			const filledOctetCount = Math.floor(prefix / 8);
			while (j < filledOctetCount) {
				octets[j] = 255;
				j++;
			}
			if (filledOctetCount < 4) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
			return new this(octets);
		};
		ipaddr.IPv6 = (function() {
			function IPv6(parts, zoneId) {
				let i, part;
				if (parts.length === 16) {
					this.parts = [];
					for (i = 0; i <= 14; i += 2) this.parts.push(parts[i] << 8 | parts[i + 1]);
				} else if (parts.length === 8) this.parts = parts;
				else throw new Error("ipaddr: ipv6 part count should be 8 or 16");
				for (i = 0; i < this.parts.length; i++) {
					part = this.parts[i];
					if (!(0 <= part && part <= 65535)) throw new Error("ipaddr: ipv6 part should fit in 16 bits");
				}
				if (zoneId) this.zoneId = zoneId;
			}
			IPv6.prototype.SpecialRanges = {
				unspecified: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 128],
				linkLocal: [new IPv6([
					65152,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 10],
				multicast: [new IPv6([
					65280,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 8],
				loopback: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1
				]), 128],
				uniqueLocal: [new IPv6([
					64512,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 7],
				ipv4Mapped: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					65535,
					0,
					0
				]), 96],
				deprecatedSiteLocal: [new IPv6([
					65216,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 10],
				discard: [new IPv6([
					256,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 64],
				rfc6145: [new IPv6([
					0,
					0,
					0,
					0,
					65535,
					0,
					0,
					0
				]), 96],
				rfc6052: [[new IPv6([
					100,
					65435,
					0,
					0,
					0,
					0,
					0,
					0
				]), 96], [new IPv6([
					100,
					65435,
					1,
					0,
					0,
					0,
					0,
					0
				]), 48]],
				"6to4": [new IPv6([
					8194,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 16],
				teredo: [new IPv6([
					8193,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 32],
				benchmarking: [new IPv6([
					8193,
					2,
					0,
					0,
					0,
					0,
					0,
					0
				]), 48],
				amt: [new IPv6([
					8193,
					3,
					0,
					0,
					0,
					0,
					0,
					0
				]), 32],
				as112v6: [[new IPv6([
					8193,
					4,
					274,
					0,
					0,
					0,
					0,
					0
				]), 48], [new IPv6([
					9760,
					79,
					32768,
					0,
					0,
					0,
					0,
					0
				]), 48]],
				deprecatedOrchid: [new IPv6([
					8193,
					16,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				orchid2: [new IPv6([
					8193,
					32,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				droneRemoteIdProtocolEntityTags: [new IPv6([
					8193,
					48,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				segmentRouting: [new IPv6([
					24320,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 16],
				reserved: [
					[new IPv6([
						8193,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 23],
					[new IPv6([
						8193,
						3512,
						0,
						0,
						0,
						0,
						0,
						0
					]), 32],
					[new IPv6([
						16383,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 20]
				]
			};
			IPv6.prototype.isIPv4MappedAddress = function() {
				return this.range() === "ipv4Mapped";
			};
			IPv6.prototype.kind = function() {
				return "ipv6";
			};
			IPv6.prototype.match = function(other, cidrRange) {
				let ref;
				if (cidrRange === void 0) {
					ref = other;
					other = ref[0];
					cidrRange = ref[1];
				}
				if (other.kind() !== "ipv6") throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
				return matchCIDR(this.parts, other.parts, 16, cidrRange);
			};
			IPv6.prototype.prefixLengthFromSubnetMask = function() {
				let cidr = 0;
				let stop = false;
				const zerotable = {
					0: 16,
					32768: 15,
					49152: 14,
					57344: 13,
					61440: 12,
					63488: 11,
					64512: 10,
					65024: 9,
					65280: 8,
					65408: 7,
					65472: 6,
					65504: 5,
					65520: 4,
					65528: 3,
					65532: 2,
					65534: 1,
					65535: 0
				};
				let part, zeros;
				for (let i = 7; i >= 0; i -= 1) {
					part = this.parts[i];
					if (part in zerotable) {
						zeros = zerotable[part];
						if (stop && zeros !== 0) return null;
						if (zeros !== 16) stop = true;
						cidr += zeros;
					} else return null;
				}
				return 128 - cidr;
			};
			IPv6.prototype.range = function() {
				return ipaddr.subnetMatch(this, this.SpecialRanges);
			};
			IPv6.prototype.toByteArray = function() {
				let part;
				const bytes = [];
				const ref = this.parts;
				for (let i = 0; i < ref.length; i++) {
					part = ref[i];
					bytes.push(part >> 8);
					bytes.push(part & 255);
				}
				return bytes;
			};
			IPv6.prototype.toFixedLengthString = function() {
				const addr = (function() {
					const results = [];
					for (let i = 0; i < this.parts.length; i++) results.push(padPart(this.parts[i].toString(16), 4));
					return results;
				}).call(this).join(":");
				let suffix = "";
				if (this.zoneId) suffix = `%${this.zoneId}`;
				return addr + suffix;
			};
			IPv6.prototype.toIPv4Address = function() {
				if (!this.isIPv4MappedAddress()) throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
				const ref = this.parts.slice(-2);
				const high = ref[0];
				const low = ref[1];
				return new ipaddr.IPv4([
					high >> 8,
					high & 255,
					low >> 8,
					low & 255
				]);
			};
			IPv6.prototype.toNormalizedString = function() {
				const addr = (function() {
					const results = [];
					for (let i = 0; i < this.parts.length; i++) results.push(this.parts[i].toString(16));
					return results;
				}).call(this).join(":");
				let suffix = "";
				if (this.zoneId) suffix = `%${this.zoneId}`;
				return addr + suffix;
			};
			IPv6.prototype.toRFC5952String = function() {
				const regex = /((^|:)(0(:|$)){2,})/g;
				const string = this.toNormalizedString();
				let bestMatchIndex = 0;
				let bestMatchLength = -1;
				let match;
				while (match = regex.exec(string)) if (match[0].length > bestMatchLength) {
					bestMatchIndex = match.index;
					bestMatchLength = match[0].length;
				}
				if (bestMatchLength < 0) return string;
				return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
			};
			IPv6.prototype.toString = function() {
				return this.toRFC5952String();
			};
			return IPv6;
		})();
		ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
			try {
				const cidr = this.parseCIDR(string);
				const ipInterfaceOctets = cidr[0].toByteArray();
				const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				const octets = [];
				let i = 0;
				while (i < 16) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
			}
		};
		ipaddr.IPv6.isIPv6 = function(string) {
			return this.parser(string) !== null;
		};
		ipaddr.IPv6.isValid = function(string) {
			if (typeof string === "string" && string.indexOf(":") === -1) return false;
			try {
				const addr = this.parser(string);
				new this(addr.parts, addr.zoneId);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv6.isValidCIDR = function(string) {
			if (typeof string === "string" && string.indexOf(":") === -1) return false;
			try {
				this.parseCIDR(string);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv6.networkAddressFromCIDR = function(string) {
			let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
			try {
				cidr = this.parseCIDR(string);
				ipInterfaceOctets = cidr[0].toByteArray();
				subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				octets = [];
				i = 0;
				while (i < 16) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
			}
		};
		ipaddr.IPv6.parse = function(string) {
			const addr = this.parser(string);
			if (addr.parts === null) throw new Error("ipaddr: string is not formatted like an IPv6 Address");
			return new this(addr.parts, addr.zoneId);
		};
		ipaddr.IPv6.parseCIDR = function(string) {
			let maskLength, match, parsed;
			if (match = string.match(/^(.+)\/(\d+)$/)) {
				maskLength = parseInt(match[2]);
				if (maskLength >= 0 && maskLength <= 128) {
					parsed = [this.parse(match[1]), maskLength];
					Object.defineProperty(parsed, "toString", { value: function() {
						return this.join("/");
					} });
					return parsed;
				}
			}
			throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
		};
		ipaddr.IPv6.parser = function(string) {
			let addr, i, match, octet, octets, zoneId;
			if (match = string.match(ipv6Regexes.deprecatedTransitional)) return this.parser(`::ffff:${match[1]}`);
			if (ipv6Regexes.native.test(string)) return expandIPv6(string, 8);
			if (match = string.match(ipv6Regexes.transitional)) {
				zoneId = match[6] || "";
				addr = match[1];
				if (!match[1].endsWith("::")) addr = addr.slice(0, -1);
				addr = expandIPv6(addr + zoneId, 6);
				if (addr.parts) {
					octets = [
						parseInt(match[2]),
						parseInt(match[3]),
						parseInt(match[4]),
						parseInt(match[5])
					];
					for (i = 0; i < octets.length; i++) {
						octet = octets[i];
						if (!(0 <= octet && octet <= 255)) return null;
					}
					addr.parts.push(octets[0] << 8 | octets[1]);
					addr.parts.push(octets[2] << 8 | octets[3]);
					return {
						parts: addr.parts,
						zoneId: addr.zoneId
					};
				}
			}
			return null;
		};
		ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
			prefix = parseInt(prefix);
			if (prefix < 0 || prefix > 128) throw new Error("ipaddr: invalid IPv6 prefix length");
			const octets = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			let j = 0;
			const filledOctetCount = Math.floor(prefix / 8);
			while (j < filledOctetCount) {
				octets[j] = 255;
				j++;
			}
			if (filledOctetCount < 16) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
			return new this(octets);
		};
		ipaddr.fromByteArray = function(bytes) {
			const length = bytes.length;
			if (length === 4) return new ipaddr.IPv4(bytes);
			else if (length === 16) return new ipaddr.IPv6(bytes);
			else throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
		};
		ipaddr.isValid = function(string) {
			return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
		};
		ipaddr.isValidCIDR = function(string) {
			return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
		};
		ipaddr.parse = function(string) {
			if (ipaddr.IPv6.isValid(string)) return ipaddr.IPv6.parse(string);
			else if (ipaddr.IPv4.isValid(string)) return ipaddr.IPv4.parse(string);
			else throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
		};
		ipaddr.parseCIDR = function(string) {
			try {
				return ipaddr.IPv6.parseCIDR(string);
			} catch (e) {
				try {
					return ipaddr.IPv4.parseCIDR(string);
				} catch (e2) {
					throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
				}
			}
		};
		ipaddr.process = function(string) {
			const addr = this.parse(string);
			if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) return addr.toIPv4Address();
			else return addr;
		};
		ipaddr.subnetMatch = function(address, rangeList, defaultName) {
			let i, rangeName, rangeSubnets, subnet;
			if (defaultName === void 0 || defaultName === null) defaultName = "unicast";
			for (rangeName in rangeList) if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
				rangeSubnets = rangeList[rangeName];
				if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) rangeSubnets = [rangeSubnets];
				for (i = 0; i < rangeSubnets.length; i++) {
					subnet = rangeSubnets[i];
					if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) return rangeName;
				}
			}
			return defaultName;
		};
		if (typeof module !== "undefined" && module.exports) module.exports = ipaddr;
		else root.ipaddr = ipaddr;
	})(exports);
})))(), 1);
/**
* Convert a glob pattern (with `*` and `**`) to a RegExp.
*
* For hostnames, segments are separated by `.`:
*   - `*` matches a single segment (no dots): [^.]+
*   - `**` matches any number of segments: .+
*
* For pathnames, segments are separated by `/`:
*   - `*` matches a single segment (no slashes): [^/]+
*   - `**` matches any number of segments (including empty): .*
*
* Literal characters are escaped for regex safety.
*/
function globToRegex(pattern, separator) {
	let regexStr = "^";
	const doubleStar = separator === "." ? ".+" : ".*";
	const singleStar = separator === "." ? "[^.]+" : "[^/]+";
	const parts = pattern.split("**");
	for (let i = 0; i < parts.length; i++) {
		if (i > 0) regexStr += doubleStar;
		const subParts = parts[i].split("*");
		for (let j = 0; j < subParts.length; j++) {
			if (j > 0) regexStr += singleStar;
			regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
		}
	}
	regexStr += "$";
	return new RegExp(regexStr);
}
/**
* Check whether a URL matches a single remote pattern.
* Follows the same semantics as Next.js's matchRemotePattern().
*/
function matchRemotePattern(pattern, url) {
	if (pattern.protocol !== void 0) {
		if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) return false;
	}
	if (pattern.port !== void 0) {
		if (pattern.port !== url.port) return false;
	}
	if (!globToRegex(pattern.hostname, ".").test(url.hostname)) return false;
	if (pattern.search !== void 0) {
		if (pattern.search !== url.search) return false;
	}
	if (!globToRegex(pattern.pathname ?? "**", "/").test(url.pathname)) return false;
	return true;
}
/**
* Check whether a URL matches any configured remote pattern or legacy domain.
*/
function hasRemoteMatch(domains, remotePatterns, url) {
	return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
/**
* Determine whether a string is a private (non-routable) IP address.
* Works for IPv4 and IPv6, including bracketed and IPv4-mapped forms.
*
* Uses ipaddr.js with range() !== 'unicast' — the same approach Next.js
* takes (via packages/next/src/server/is-private-ip.ts). This covers all
* IETF non-unicast ranges (CGNAT, benchmarking, multicast, reserved,
* teredo, documentation, discard, NAT64, etc.) without hand-rolling CIDR
* prefix checks that are easy to get wrong.
*
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/is-private-ip.ts
*/
function isPrivateIp(ip) {
	if (ip.startsWith("[") && ip.endsWith("]")) ip = ip.slice(1, -1);
	try {
		const parsed = import_ipaddr.default.parse(ip);
		if (parsed instanceof import_ipaddr.default.IPv6 && parsed.isIPv4MappedAddress()) return parsed.toIPv4Address().range() !== "unicast";
		return parsed.range() !== "unicast";
	} catch {
		return false;
	}
}
//#endregion
//#region node_modules/vinext/dist/shims/use-merged-ref.js
function useMergedRef(refA, refB) {
	const cleanupA = (0, import_react.useRef)(null);
	const cleanupB = (0, import_react.useRef)(null);
	return (0, import_react.useCallback)((current) => {
		if (current === null) {
			const cleanupFnA = cleanupA.current;
			if (cleanupFnA) {
				cleanupA.current = null;
				cleanupFnA();
			}
			const cleanupFnB = cleanupB.current;
			if (cleanupFnB) {
				cleanupB.current = null;
				cleanupFnB();
			}
		} else {
			if (refA) cleanupA.current = applyRef(refA, current);
			if (refB) cleanupB.current = applyRef(refB, current);
		}
	}, [refA, refB]);
}
function applyRef(refA, current) {
	if (typeof refA === "function") {
		const cleanup = refA(current);
		if (typeof cleanup === "function") return cleanup;
		else return () => refA(null);
	} else {
		refA.current = current;
		return () => {
			refA.current = null;
		};
	}
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-VTEFGNYT.mjs
var import_jsx_runtime = require_jsx_runtime();
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var fixedMap = {
	srcset: "srcSet",
	fetchpriority: "use" in import_react ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
	if (key.startsWith("data-") || key.startsWith("aria-")) return key;
	return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
	return Object.fromEntries(Object.entries(props).map(([k, v]) => [camelize(k), nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v]));
}
//#endregion
//#region node_modules/@unpic/core/dist/chunk-7DG3H6KO.mjs
var getSizes = (width, layout) => {
	if (!width || !layout) return;
	switch (layout) {
		case `constrained`: return `(min-width: ${width}px) ${width}px, 100vw`;
		case `fixed`: return `${width}px`;
		case `fullWidth`: return `100vw`;
		default: return;
	}
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({ width, height, aspectRatio, layout, objectFit = "cover", background }) => {
	const styleEntries = [["object-fit", objectFit]];
	if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:") || background?.startsWith("/")) {
		styleEntries.push(["background-image", `url(${background})`]);
		styleEntries.push(["background-size", "cover"]);
		styleEntries.push(["background-repeat", "no-repeat"]);
	} else styleEntries.push(["background", background]);
	if (layout === "fixed") {
		styleEntries.push(["width", pixelate(width)]);
		styleEntries.push(["height", pixelate(height)]);
	}
	if (layout === "constrained") {
		styleEntries.push(["max-width", pixelate(width)]);
		styleEntries.push(["max-height", pixelate(height)]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["width", "100%"]);
	}
	if (layout === "fullWidth") {
		styleEntries.push(["width", "100%"]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["height", pixelate(height)]);
	}
	return Object.fromEntries(styleEntries.filter(([, value]) => value));
};
var DEFAULT_RESOLUTIONS = [
	6016,
	5120,
	4480,
	3840,
	3200,
	2560,
	2048,
	1920,
	1668,
	1280,
	1080,
	960,
	828,
	750,
	640
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({ width, layout, resolutions = DEFAULT_RESOLUTIONS }) => {
	if (layout === "fullWidth") return resolutions;
	if (!width) return [];
	const doubleWidth = width * 2;
	if (layout === "fixed") return [width, doubleWidth];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...resolutions.filter((w) => w < doubleWidth)
	];
	return [];
};
var getSrcSetEntries = ({ src, width, layout = "constrained", height, aspectRatio, breakpoints, format }) => {
	breakpoints ||= getBreakpoints({
		width,
		layout
	});
	return breakpoints.sort((a, b) => a - b).map((bp) => {
		let transformedHeight;
		if (height && aspectRatio) transformedHeight = Math.round(bp / aspectRatio);
		return {
			url: src,
			width: bp,
			height: transformedHeight,
			format
		};
	});
};
var getSrcSet = (options) => {
	let { src, transformer, operations } = options;
	if (!transformer) return "";
	return getSrcSetEntries(options).map(({ url: _, ...transform }) => {
		return `${transformer(src, {
			...operations,
			...transform
		}, options.options)?.toString()} ${transform.width}w`;
	}).join(",\n");
};
function transformSharedProps({ width, height, priority, layout = "constrained", aspectRatio, ...props }) {
	width = width && Number(width) || void 0;
	height = height && Number(height) || void 0;
	if (priority) {
		props.loading ||= "eager";
		props.fetchpriority ||= "high";
	} else {
		props.loading ||= "lazy";
		props.decoding ||= "async";
	}
	if (props.alt === "") props.role ||= "presentation";
	if (aspectRatio) {
		if (width) if (height) {} else height = Math.round(width / aspectRatio);
		else if (height) width = Math.round(height * aspectRatio);
		else if (layout !== "fullWidth") {}
	} else if (width && height) aspectRatio = width / height;
	else if (layout !== "fullWidth") {}
	return {
		width,
		height,
		aspectRatio,
		layout,
		...props
	};
}
function transformBaseImageProps(props) {
	let { src, transformer, background, layout, objectFit, breakpoints, width, height, aspectRatio, unstyled, operations, options, ...transformedProps } = transformSharedProps(props);
	if (transformer && background === "auto") {
		const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
		const lowResImage = transformer(src, {
			width: LOW_RES_WIDTH,
			height: lowResHeight
		}, options);
		if (lowResImage) background = lowResImage.toString();
	}
	const styleProps = {
		width,
		height,
		aspectRatio,
		layout,
		objectFit,
		background
	};
	transformedProps.sizes ||= getSizes(width, layout);
	if (!unstyled) transformedProps.style = {
		...getStyle(styleProps),
		...transformedProps.style
	};
	if (transformer) {
		transformedProps.srcset = getSrcSet({
			src,
			width,
			height,
			aspectRatio,
			layout,
			breakpoints,
			transformer,
			operations,
			options
		});
		const transformed = transformer(src, {
			...operations,
			width,
			height
		}, options);
		if (transformed) src = transformed;
		if (layout === "fullWidth" || layout === "constrained") {
			width = void 0;
			height = void 0;
		}
	}
	return {
		...transformedProps,
		src: src?.toString(),
		width,
		height
	};
}
function normalizeImageType(type) {
	if (!type) return {};
	if (type.startsWith("image/")) return {
		format: type.slice(6),
		mimeType: type
	};
	return {
		format: type,
		mimeType: `image/${type === "jpg" ? "jpeg" : type}`
	};
}
function transformBaseSourceProps({ media, type, ...props }) {
	let { src, transformer, layout, breakpoints, width, height, aspectRatio, sizes, loading, decoding, operations, options, ...rest } = transformSharedProps(props);
	if (!transformer) return {};
	const { format, mimeType } = normalizeImageType(type);
	sizes ||= getSizes(width, layout);
	const srcset = getSrcSet({
		src,
		width,
		height,
		aspectRatio,
		layout,
		breakpoints,
		transformer,
		format,
		operations,
		options
	});
	const transformed = transformer(src, {
		...operations,
		width,
		height
	}, options);
	if (transformed) src = transformed;
	const returnObject = {
		...rest,
		sizes,
		srcset
	};
	if (media) returnObject.media = media;
	if (mimeType) returnObject.type = mimeType;
	return returnObject;
}
//#endregion
//#region node_modules/unpic/esm/data/domains.js
var domains_default = {
	"images.ctfassets.net": "contentful",
	"cdn.builder.io": "builder.io",
	"images.prismic.io": "imgix",
	"www.datocms-assets.com": "imgix",
	"cdn.sanity.io": "imgix",
	"images.unsplash.com": "imgix",
	"cdn.shopify.com": "shopify",
	"s7d1.scene7.com": "scene7",
	"ip.keycdn.com": "keycdn",
	"assets.caisy.io": "bunny",
	"images.contentstack.io": "contentstack",
	"ucarecdn.com": "uploadcare",
	"imagedelivery.net": "cloudflare_images",
	"wsrv.nl": "wsrv"
};
//#endregion
//#region node_modules/unpic/esm/data/subdomains.js
var subdomains_default = {
	"imgix.net": "imgix",
	"wp.com": "wordpress",
	"files.wordpress.com": "wordpress",
	"b-cdn.net": "bunny",
	"storyblok.com": "storyblok",
	"kc-usercontent.com": "kontent.ai",
	"cloudinary.com": "cloudinary",
	"kxcdn.com": "keycdn",
	"imgeng.in": "imageengine",
	"imagekit.io": "imagekit",
	"cloudimg.io": "cloudimage",
	"ucarecdn.com": "uploadcare",
	"supabase.co": "supabase",
	"graphassets.com": "hygraph"
};
//#endregion
//#region node_modules/unpic/esm/data/paths.js
var paths_default = {
	"/cdn-cgi/image/": "cloudflare",
	"/cdn-cgi/imagedelivery/": "cloudflare_images",
	"/_next/image": "nextjs",
	"/_vercel/image": "vercel",
	"/is/image": "scene7",
	"/_ipx/": "ipx",
	"/_image": "astro",
	"/.netlify/images": "netlify",
	"/storage/v1/object/public/": "supabase",
	"/storage/v1/render/image/public/": "supabase",
	"/v1/storage/buckets/": "appwrite"
};
//#endregion
//#region node_modules/unpic/esm/src/utils.js
function roundIfNumeric(value) {
	if (!value) return value;
	const num = Number(value);
	if (isNaN(num)) return value;
	return Math.round(num);
}
/**
* Given a URL object, returns path and query params
*/
var toRelativeUrl = (url) => {
	const { pathname, search } = url;
	return `${pathname}${search}`;
};
/**
* Returns a URL string that may be relative or absolute
*/
var toCanonicalUrlString = (url) => {
	return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
/**
* Normalises a URL object or string URL to a URL object.
*/
var toUrl = (url, base) => {
	return typeof url === "string" ? new URL(url, base ?? "http://n/") : url;
};
/**
* Escapes a string, even if it's URL-safe
*/
var escapeChar = (text) => text === " " ? "+" : "%" + text.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
var stripLeadingSlash = (str) => str?.startsWith("/") ? str.slice(1) : str;
var stripTrailingSlash = (str) => str?.endsWith("/") ? str.slice(0, -1) : str;
var addTrailingSlash = (str) => str?.endsWith("/") ? str : `${str}/`;
/**
* Creates a formatter given an operation joiner and key/value joiner
*/
var createFormatter = (kvSeparator, paramSeparator) => {
	const encodedValueJoiner = escapeChar(kvSeparator);
	const encodedOperationJoiner = escapeChar(paramSeparator);
	function escape(value) {
		return encodeURIComponent(value).replaceAll(kvSeparator, encodedValueJoiner).replaceAll(paramSeparator, encodedOperationJoiner);
	}
	function format(key, value) {
		return `${escape(key)}${kvSeparator}${escape(String(value))}`;
	}
	return (operations) => {
		return (Array.isArray(operations) ? operations : Object.entries(operations)).flatMap(([key, value]) => {
			if (value === void 0 || value === null) return [];
			if (Array.isArray(value)) return value.map((v) => format(key, v));
			return format(key, value);
		}).join(paramSeparator);
	};
};
/**
* Creates a parser given an operation joiner and key/value joiner
*/
var createParser = (kvSeparator, paramSeparator) => {
	if (kvSeparator === "=" && paramSeparator === "&") return queryParser;
	return (url) => {
		const urlString = url.toString();
		return Object.fromEntries(urlString.split(paramSeparator).map((pair) => {
			const [key, value] = pair.split(kvSeparator);
			return [decodeURI(key), decodeURI(value)];
		}));
	};
};
/**
* Clamp width and height, maintaining aspect ratio
*/
function clampDimensions(operations, maxWidth = 4e3, maxHeight = 4e3) {
	let { width, height } = operations;
	width = Number(width) || void 0;
	height = Number(height) || void 0;
	if (width && width > maxWidth) {
		if (height) height = Math.round(height * maxWidth / width);
		width = maxWidth;
	}
	if (height && height > maxHeight) {
		if (width) width = Math.round(width * maxHeight / height);
		height = maxHeight;
	}
	return {
		width,
		height
	};
}
function extractFromURL(url) {
	const parsedUrl = toUrl(url);
	const operations = Object.fromEntries(parsedUrl.searchParams.entries());
	for (const key in [
		"width",
		"height",
		"quality"
	]) {
		const value = operations[key];
		if (value) {
			const newVal = Number(value);
			if (!isNaN(newVal)) operations[key] = newVal;
		}
	}
	parsedUrl.search = "";
	return {
		operations,
		src: toCanonicalUrlString(parsedUrl)
	};
}
function normaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	if (operations.format && operations.format in formatMap) operations.format = formatMap[operations.format];
	if (operations.width) operations.width = roundIfNumeric(operations.width);
	if (operations.height) operations.height = roundIfNumeric(operations.height);
	for (const k in keyMap) {
		if (!Object.prototype.hasOwnProperty.call(keyMap, k)) continue;
		const key = k;
		if (keyMap[key] === false) {
			delete operations[key];
			continue;
		}
		if (keyMap[key] && operations[key]) {
			operations[keyMap[key]] = operations[key];
			delete operations[key];
		}
	}
	for (const k in defaults) {
		if (!Object.prototype.hasOwnProperty.call(defaults, k)) continue;
		const key = k;
		const value = defaults[key];
		if (!operations[key] && value !== void 0) {
			if (keyMap[key] === false) continue;
			const resolvedKey = keyMap[key] ?? key;
			if (resolvedKey in operations) continue;
			operations[resolvedKey] = value;
		}
	}
	return operations;
}
var invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
function denormaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	const ops = normaliseOperations({
		keyMap: invertMap(keyMap),
		formatMap: invertMap(formatMap),
		defaults
	}, operations);
	if (ops.width) ops.width = roundIfNumeric(ops.width);
	if (ops.height) ops.height = roundIfNumeric(ops.height);
	const q = Number(ops.quality);
	if (!isNaN(q)) ops.quality = q;
	return ops;
}
var queryParser = (url) => {
	const parsedUrl = toUrl(url);
	return Object.fromEntries(parsedUrl.searchParams.entries());
};
function createOperationsGenerator({ kvSeparator = "=", paramSeparator = "&", ...options } = {}) {
	const formatter = createFormatter(kvSeparator, paramSeparator);
	return (operations) => {
		return formatter(normaliseOperations(options, operations));
	};
}
function createOperationsParser({ kvSeparator = "=", paramSeparator = "&", defaults: _, ...options } = {}) {
	const parser = createParser(kvSeparator, paramSeparator);
	return (url) => {
		return denormaliseOperations(options, url ? parser(url) : {});
	};
}
function createOperationsHandlers(config) {
	return {
		operationsGenerator: createOperationsGenerator(config),
		operationsParser: createOperationsParser(config)
	};
}
function paramToBoolean(value) {
	if (value === void 0 || value === null) return;
	try {
		return Boolean(JSON.parse(value?.toString()));
	} catch {
		return Boolean(value);
	}
}
var removeUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
function createExtractAndGenerate(extract, generate) {
	return ((src, operations, options) => {
		const base = extract(src, options);
		if (!base) return generate(src, operations, options);
		return generate(base.src, {
			...base.operations,
			...removeUndefined(operations)
		}, {
			...base.options,
			...options
		});
	});
}
//#endregion
//#region node_modules/unpic/esm/src/detect.js
var cdnDomains = new Map(Object.entries(domains_default));
var cdnSubdomains = Object.entries(subdomains_default);
var cdnPaths = Object.entries(paths_default);
/**
* Detects the image CDN provider for a given URL.
*/
function getProviderForUrl(url) {
	return getProviderForUrlByDomain(url) || getProviderForUrlByPath(url);
}
function getProviderForUrlByDomain(url) {
	if (typeof url === "string" && !url.startsWith("https://")) return false;
	const { hostname } = toUrl(url);
	const cdn = cdnDomains.get(hostname);
	if (cdn) return cdn;
	return cdnSubdomains.find(([subdomain]) => hostname.endsWith(subdomain))?.[1] || false;
}
/**
* Gets the image CDN provider for a given URL by its path.
*/
function getProviderForUrlByPath(url) {
	const { pathname } = toUrl(url);
	return cdnPaths.find(([path]) => pathname.startsWith(path))?.[1] || false;
}
//#endregion
//#region node_modules/unpic/esm/src/providers/appwrite.js
var VIEW_URL_SUFFIX = "/view?";
var PREVIEW_URL_SUFFIX = "/preview?";
var { operationsGenerator: operationsGenerator$25, operationsParser: operationsParser$20 } = createOperationsHandlers({
	keyMap: { format: "output" },
	kvSeparator: "=",
	paramSeparator: "&"
});
var generate$26 = (src, modifiers) => {
	const url = toUrl(src.toString().replace(VIEW_URL_SUFFIX, PREVIEW_URL_SUFFIX));
	const projectParam = url.searchParams.get("project") ?? "";
	url.search = operationsGenerator$25(modifiers);
	url.searchParams.append("project", projectParam);
	return toCanonicalUrlString(url);
};
var extract$26 = (url) => {
	if (getProviderForUrlByPath(url) !== "appwrite") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$20(parsedUrl);
	delete operations.project;
	const projectParam = parsedUrl.searchParams.get("project") ?? "";
	parsedUrl.search = "";
	parsedUrl.searchParams.append("project", projectParam);
	return {
		src: parsedUrl.href,
		operations
	};
};
var transform$27 = createExtractAndGenerate(extract$26, generate$26);
//#endregion
//#region node_modules/unpic/esm/src/providers/astro.js
var DEFAULT_ENDPOINT = "/_image";
var { operationsParser: operationsParser$19, operationsGenerator: operationsGenerator$24 } = createOperationsHandlers({
	keyMap: {
		format: "f",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var generate$25 = (src, modifiers, options) => {
	const url = toUrl(`${stripTrailingSlash(options?.baseUrl ?? "")}${options?.endpoint ?? DEFAULT_ENDPOINT}`);
	url.search = operationsGenerator$24(modifiers);
	url.searchParams.set("href", src.toString());
	return toCanonicalUrlString(url);
};
var extract$25 = (url) => {
	const parsedUrl = toUrl(url);
	const src = parsedUrl.searchParams.get("href");
	if (!src) return null;
	parsedUrl.searchParams.delete("href");
	return {
		src,
		operations: operationsParser$19(parsedUrl),
		options: { baseUrl: parsedUrl.origin }
	};
};
var transform$26 = (src, operations, options = {}) => {
	if (toUrl(src).pathname !== (options?.endpoint ?? DEFAULT_ENDPOINT)) return generate$25(src, operations, options);
	const base = extract$25(src);
	if (!base) return generate$25(src, operations, options);
	options.baseUrl ??= base.options.baseUrl;
	return generate$25(base.src, {
		...base.operations,
		...operations
	}, options);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/builder.io.js
var operationsGenerator$23 = createOperationsGenerator({ defaults: {
	fit: "cover",
	format: "webp",
	sharp: true
} });
var extract$24 = extractFromURL;
var generate$24 = (src, modifiers) => {
	const operations = operationsGenerator$23(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var transform$25 = createExtractAndGenerate(extract$24, generate$24);
//#endregion
//#region node_modules/unpic/esm/src/providers/bunny.js
var operationsGenerator$22 = createOperationsGenerator({ keyMap: { format: "output" } });
var extract$23 = extractFromURL;
var generate$23 = (src, modifiers) => {
	const operations = operationsGenerator$22(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate$1 = createExtractAndGenerate(extract$23, generate$23);
var transform$24 = (src, operations) => {
	const { width, height } = operations;
	if (width && height) operations.aspect_ratio ??= `${Math.round(Number(width))}:${Math.round(Number(height))}`;
	return extractAndGenerate$1(src, operations);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare.js
var { operationsGenerator: operationsGenerator$21, operationsParser: operationsParser$18 } = createOperationsHandlers({
	keyMap: { "format": "f" },
	defaults: {
		format: "auto",
		fit: "cover"
	},
	formatMap: { jpg: "jpeg" },
	kvSeparator: "=",
	paramSeparator: ","
});
var generate$22 = (src, operations, options) => {
	const modifiers = operationsGenerator$21(operations);
	const url = toUrl(options?.domain ? `https://${options.domain}` : "/");
	url.pathname = `/cdn-cgi/image/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$22 = (url, options) => {
	if (getProviderForUrlByPath(url) !== "cloudflare") return null;
	const parsedUrl = toUrl(url);
	const [, , , modifiers, ...src] = parsedUrl.pathname.split("/");
	const operations = operationsParser$18(modifiers);
	return {
		src: toCanonicalUrlString(toUrl(src.join("/"))),
		operations,
		options: { domain: options?.domain ?? (parsedUrl.hostname === "n" ? void 0 : parsedUrl.hostname) }
	};
};
var transform$23 = createExtractAndGenerate(extract$22, generate$22);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare_images.js
var cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var { operationsGenerator: operationsGenerator$20, operationsParser: operationsParser$17 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { fit: "cover" },
	kvSeparator: "=",
	paramSeparator: ","
});
function formatUrl(options, transformations) {
	const { host, accountHash, imageId } = options;
	if (!host || !accountHash || !imageId) throw new Error("Missing required Cloudflare Images options");
	return [
		"https:/",
		...host === "imagedelivery.net" ? [host] : [
			host,
			"cdn-cgi",
			"imagedelivery"
		],
		accountHash,
		imageId,
		transformations
	].filter(Boolean).join("/");
}
var generate$21 = (_src, operations, options = {}) => {
	return toCanonicalUrlString(toUrl(formatUrl(options, operationsGenerator$20(operations))));
};
var extract$21 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = [...parsedUrl.toString().matchAll(cloudflareImagesRegex), ...parsedUrl.toString().matchAll(imagedeliveryRegex)];
	if (!matches[0]?.groups) return null;
	const { host, accountHash, imageId, transformations } = matches[0].groups;
	const operations = operationsParser$17(transformations || "");
	const options = {
		host,
		accountHash,
		imageId
	};
	return {
		src: formatUrl(options),
		operations,
		options
	};
};
var transform$22 = (src, operations, options = {}) => {
	const extracted = extract$21(src);
	if (!extracted) throw new Error("Invalid Cloudflare Images URL");
	const newOperations = {
		...extracted.operations,
		...operations
	};
	return generate$21(extracted.src, newOperations, {
		...extracted.options,
		...options
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudimage.js
var { operationsGenerator: operationsGenerator$19, operationsParser: operationsParser$16 } = createOperationsHandlers({
	keyMap: {
		format: "force_format",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { org_if_sml: 1 }
});
var generate$20 = (src, modifiers = {}, { token } = {}) => {
	if (!token) throw new Error("Token is required for Cloudimage URLs" + src);
	let srcString = src.toString();
	srcString = srcString.replace(/^https?:\/\//, "");
	if (srcString.includes("?")) {
		modifiers.ci_url_encoded = 1;
		srcString = encodeURIComponent(srcString);
	}
	const operations = operationsGenerator$19(modifiers);
	const url = new URL(`https://${token}.cloudimg.io/`);
	url.pathname = srcString;
	url.search = operations;
	return url.toString();
};
var extract$20 = (src, options = {}) => {
	const url = toUrl(src);
	if (getProviderForUrl(url) !== "cloudimage") return null;
	const operations = operationsParser$16(url);
	let originalSrc = url.pathname;
	if (operations.ci_url_encoded) {
		originalSrc = decodeURIComponent(originalSrc);
		delete operations.ci_url_encoded;
	}
	options.token ??= url.hostname.replace(".cloudimg.io", "");
	return {
		src: `${url.protocol}/${originalSrc}`,
		operations,
		options
	};
};
var transform$21 = createExtractAndGenerate(extract$20, generate$20);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudinary.js
var publicRegex = /https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var privateRegex = /https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var { operationsGenerator: operationsGenerator$18, operationsParser: operationsParser$15 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		format: "auto",
		c: "lfill"
	},
	kvSeparator: "_",
	paramSeparator: ","
});
function formatCloudinaryUrl({ host, cloudName, assetType, deliveryType, signature, transformations, version, id }) {
	return [
		"https:/",
		host,
		host === "res.cloudinary.com" ? cloudName : void 0,
		assetType,
		deliveryType,
		signature,
		transformations,
		version,
		id
	].filter(Boolean).join("/");
}
function parseCloudinaryUrl(url) {
	let matches = url.toString().match(publicRegex);
	if (!matches?.length) matches = url.toString().match(privateRegex);
	if (!matches?.length) return null;
	return matches.groups || {};
}
var transform$20 = (src, operations) => {
	const group = parseCloudinaryUrl(src.toString());
	if (!group) return src.toString();
	group.transformations = operationsGenerator$18({
		...operationsParser$15(group.transformations || ""),
		...operations
	});
	return formatCloudinaryUrl(group);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentful.js
var operationsGenerator$17 = createOperationsGenerator({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "fill" }
});
var generate$19 = (src, modifiers) => {
	const operations = operationsGenerator$17(modifiers);
	const url = new URL(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate = createExtractAndGenerate(extractFromURL, generate$19);
var transform$19 = (src, operations) => {
	const { width, height } = clampDimensions(operations, 4e3, 4e3);
	return extractAndGenerate(src, {
		...operations,
		width,
		height
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentstack.js
var operationsGenerator$16 = createOperationsGenerator({ defaults: {
	auto: "webp",
	disable: "upscale"
} });
var generate$18 = (src, operations, { baseURL = "https://images.contentstack.io/" } = {}) => {
	if (operations.width && operations.height) operations.fit ??= "crop";
	const modifiers = operationsGenerator$16(operations);
	const url = toUrl(src);
	if (url.hostname === "n") {
		url.protocol = "https:";
		url.hostname = new URL(baseURL).hostname;
	}
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$18 = (url) => {
	const { src, operations } = extractFromURL(url) ?? {};
	if (!operations || !src) return null;
	const { origin } = toUrl(url);
	return {
		src,
		operations,
		options: { baseURL: origin }
	};
};
var transform$18 = createExtractAndGenerate(extract$18, generate$18);
//#endregion
//#region node_modules/unpic/esm/src/providers/directus.js
var operationsGenerator$15 = createOperationsGenerator({ defaults: {
	withoutEnlargement: true,
	fit: "cover"
} });
var generate$17 = (src, operations) => {
	if (Array.isArray(operations.transforms)) operations.transforms = JSON.stringify(operations.transforms);
	const modifiers = operationsGenerator$15(operations);
	const url = toUrl(src);
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$17 = (url) => {
	const base = extractFromURL(url);
	if (base?.operations?.transforms && typeof base.operations.transforms === "string") try {
		base.operations.transforms = JSON.parse(base.operations.transforms);
	} catch {
		return null;
	}
	return base;
};
var transform$17 = createExtractAndGenerate(extract$17, generate$17);
//#endregion
//#region node_modules/unpic/esm/src/providers/hygraph.js
var hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
var { operationsGenerator: operationsGenerator$14, operationsParser: operationsParser$14 } = createOperationsHandlers({
	keyMap: {
		width: "width",
		height: "height",
		format: "format"
	},
	defaults: {
		format: "auto",
		fit: "crop"
	}
});
var extract$16 = (url) => {
	const matches = toUrl(url).toString().match(hygraphRegex);
	if (!matches?.groups) return null;
	const { region, envId, handle, transformations } = matches.groups;
	const operations = {};
	if (transformations) transformations.split("/").forEach((part) => {
		const [operation, params] = part.split("=");
		if (operation === "resize" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "width" || key === "height") operations[key] = Number(value);
			else if (key === "fit") operations.fit = value;
		});
		else if (operation === "output" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "format") operations.format = value;
		});
		else if (operation === "auto_image") operations.format = "auto";
	});
	return {
		src: `https://${region}.graphassets.com/${envId}/${handle}`,
		operations,
		options: {
			region,
			envId,
			handle
		}
	};
};
var generate$16 = (src, operations, options = {}) => {
	const extracted = extract$16(src);
	if (!extracted) throw new Error("Invalid Hygraph URL");
	const { region, envId, handle } = {
		...extracted.options,
		...options
	};
	const transforms = [];
	if (operations.width || operations.height) {
		const resize = [];
		if (operations.width && operations.height) resize.push("fit:crop");
		else if (operations.fit) resize.push(`fit:${operations.fit}`);
		if (operations.width) resize.push(`width:${operations.width}`);
		if (operations.height) resize.push(`height:${operations.height}`);
		if (resize.length) transforms.push(`resize=${resize.join(",")}`);
	}
	if (operations.format === "auto" || !operations.format && !extracted.operations.format) transforms.push("auto_image");
	else if (operations.format) transforms.push(`output=format:${operations.format}`);
	return toCanonicalUrlString(toUrl(`${`https://${region}.graphassets.com/${envId}`}${transforms.length > 0 ? "/" + transforms.join("/") : ""}/${handle}`));
};
var transform$16 = createExtractAndGenerate(extract$16, generate$16);
//#endregion
//#region node_modules/unpic/esm/src/providers/imageengine.js
var { operationsGenerator: operationsGenerator$13, operationsParser: operationsParser$13 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { m: "cropbox" },
	kvSeparator: "_",
	paramSeparator: "/"
});
var generate$15 = (src, operations) => {
	const modifiers = operationsGenerator$13(operations);
	const url = toUrl(src);
	url.searchParams.set("imgeng", modifiers);
	return toCanonicalUrlString(url);
};
var extract$15 = (url) => {
	const parsedUrl = toUrl(url);
	const imgeng = parsedUrl.searchParams.get("imgeng");
	if (!imgeng) return null;
	const operations = operationsParser$13(imgeng);
	parsedUrl.searchParams.delete("imgeng");
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$15 = createExtractAndGenerate(extract$15, generate$15);
//#endregion
//#region node_modules/unpic/esm/src/providers/imagekit.js
var { operationsGenerator: operationsGenerator$12, operationsParser: operationsParser$12 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		c: "maintain_ratio",
		fo: "auto"
	},
	kvSeparator: "-",
	paramSeparator: ","
});
var generate$14 = (src, operations) => {
	const modifiers = operationsGenerator$12(operations);
	const url = toUrl(src);
	url.searchParams.set("tr", modifiers);
	return toCanonicalUrlString(url);
};
var extract$14 = (url) => {
	const parsedUrl = toUrl(url);
	let trPart = null;
	let path = parsedUrl.pathname;
	if (parsedUrl.searchParams.has("tr")) {
		trPart = parsedUrl.searchParams.get("tr");
		parsedUrl.searchParams.delete("tr");
	} else {
		const pathParts = parsedUrl.pathname.split("/");
		const trIndex = pathParts.findIndex((part) => part.startsWith("tr:"));
		if (trIndex !== -1) {
			trPart = pathParts[trIndex].slice(3);
			path = pathParts.slice(0, trIndex).concat(pathParts.slice(trIndex + 1)).join("/");
		}
	}
	if (!trPart) return null;
	parsedUrl.pathname = path;
	const operations = operationsParser$12(trPart);
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$14 = createExtractAndGenerate(extract$14, generate$14);
//#endregion
//#region node_modules/unpic/esm/src/providers/imgix.js
var { operationsGenerator: operationsGenerator$11, operationsParser: operationsParser$11 } = createOperationsHandlers({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: {
		fit: "min",
		auto: "format"
	}
});
var extract$13 = (url) => {
	const src = toUrl(url);
	const operations = operationsParser$11(url);
	src.search = "";
	return {
		src: toCanonicalUrlString(src),
		operations
	};
};
var generate$13 = (src, operations) => {
	const modifiers = operationsGenerator$11(operations);
	const url = toUrl(src);
	url.search = modifiers;
	if (url.searchParams.has("fm") && url.searchParams.get("auto") === "format") url.searchParams.delete("auto");
	return toCanonicalUrlString(url);
};
var transform$13 = createExtractAndGenerate(extract$13, generate$13);
//#endregion
//#region node_modules/unpic/esm/src/providers/ipx.js
var { operationsGenerator: operationsGenerator$10, operationsParser: operationsParser$10 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		quality: "q",
		format: "f"
	},
	defaults: { f: "auto" },
	kvSeparator: "_",
	paramSeparator: ","
});
var generate$12 = (src, operations, options) => {
	if (operations.width && operations.height) {
		operations.s = `${operations.width}x${operations.height}`;
		delete operations.width;
		delete operations.height;
	}
	const modifiers = operationsGenerator$10(operations);
	const url = toUrl(options?.baseURL ?? "/_ipx");
	url.pathname = `${stripTrailingSlash(url.pathname)}/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$12 = (url) => {
	const parsedUrl = toUrl(url);
	const [, baseUrlPart, modifiers, ...srcParts] = parsedUrl.pathname.split("/");
	if (!modifiers || !srcParts.length) return null;
	const operations = operationsParser$10(modifiers);
	if (operations.s) {
		const [width, height] = operations.s.split("x").map(Number);
		operations.width = width;
		operations.height = height;
		delete operations.s;
	}
	return {
		src: "/" + srcParts.join("/"),
		operations,
		options: { baseURL: `${parsedUrl.origin}/${baseUrlPart}` }
	};
};
var transform$12 = (src, operations, options) => {
	const url = toUrl(src);
	const baseURL = options?.baseURL;
	if (baseURL && url.toString().startsWith(baseURL) || url.pathname.startsWith("/_ipx")) {
		const extracted = extract$12(src);
		if (extracted) return generate$12(extracted.src, {
			...extracted.operations,
			...operations
		}, { baseURL: extracted.options.baseURL });
	}
	return generate$12(src, operations, { baseURL });
};
//#endregion
//#region node_modules/unpic/esm/src/providers/keycdn.js
var BOOLEAN_PARAMS = [
	"enlarge",
	"flip",
	"flop",
	"negate",
	"normalize",
	"grayscale",
	"removealpha",
	"olrepeat",
	"progressive",
	"adaptive",
	"lossless",
	"nearlossless",
	"metadata"
];
var { operationsGenerator: operationsGenerator$9, operationsParser: operationsParser$9 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	formatMap: { jpg: "jpeg" }
});
var generate$11 = (src, operations) => {
	const url = toUrl(src);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = operations[key] ? 1 : 0;
	url.search = operationsGenerator$9(operations);
	return toCanonicalUrlString(url);
};
var extract$11 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$9(parsedUrl);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = paramToBoolean(operations[key]);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$11 = createExtractAndGenerate(extract$11, generate$11);
//#endregion
//#region node_modules/unpic/esm/src/providers/kontent.ai.js
var { operationsGenerator: operationsGenerator$8, operationsParser: operationsParser$8 } = createOperationsHandlers({
	formatMap: { jpg: "jpeg" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$10 = (src, operations) => {
	const url = toUrl(src);
	if (operations.lossless !== void 0) operations.lossless = operations.lossless ? 1 : 0;
	if (operations.width && operations.height) operations.fit = "crop";
	url.search = operationsGenerator$8(operations);
	return toCanonicalUrlString(url);
};
var extract$10 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$8(parsedUrl);
	if (operations.lossless !== void 0) operations.lossless = paramToBoolean(operations.lossless);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$10 = createExtractAndGenerate(extract$10, generate$10);
//#endregion
//#region node_modules/unpic/esm/src/providers/netlify.js
var { operationsGenerator: operationsGenerator$7, operationsParser: operationsParser$7 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$9 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/.netlify/images`);
	url.search = operationsGenerator$7(operations);
	url.searchParams.set("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$9 = (url) => {
	if (getProviderForUrlByPath(url) !== "netlify") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$7(parsedUrl);
	delete operations.url;
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: parsedUrl.hostname === "n" ? void 0 : parsedUrl.origin }
	};
};
var transform$9 = createExtractAndGenerate(extract$9, generate$9);
//#endregion
//#region node_modules/unpic/esm/src/providers/vercel.js
var { operationsGenerator: operationsGenerator$6, operationsParser: operationsParser$6 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		quality: "q",
		height: false,
		format: false
	},
	defaults: { q: 75 }
});
var generate$8 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/${options.prefix || "_vercel"}/image`);
	url.search = operationsGenerator$6(operations);
	url.searchParams.append("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$8 = (url, options = {}) => {
	if (!["vercel", "nextjs"].includes(getProviderForUrlByPath(url) || "")) return null;
	const parsedUrl = toUrl(url);
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.searchParams.delete("url");
	const operations = operationsParser$6(parsedUrl);
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: options.baseUrl ?? parsedUrl.origin }
	};
};
var transform$8 = createExtractAndGenerate(extract$8, generate$8);
//#endregion
//#region node_modules/unpic/esm/src/providers/nextjs.js
var generate$7 = (src, operations, options = {}) => generate$8(src, operations, {
	...options,
	prefix: "_next"
});
var extract$7 = (url, options) => extract$8(url, options);
var transform$7 = createExtractAndGenerate(extract$7, generate$7);
//#endregion
//#region node_modules/unpic/esm/src/providers/scene7.js
var { operationsGenerator: operationsGenerator$5, operationsParser: operationsParser$5 } = createOperationsHandlers({
	keyMap: {
		width: "wid",
		height: "hei",
		quality: "qlt",
		format: "fmt"
	},
	defaults: { fit: "crop,0" }
});
var BASE = "https://s7d1.scene7.com/is/image/";
var generate$6 = (src, operations) => {
	const url = new URL(src, BASE);
	url.search = operationsGenerator$5(operations);
	return toCanonicalUrlString(url);
};
var extract$6 = (url) => {
	if (getProviderForUrl(url) !== "scene7") return null;
	const parsedUrl = new URL(url, BASE);
	const operations = operationsParser$5(parsedUrl);
	parsedUrl.search = "";
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$6 = createExtractAndGenerate(extract$6, generate$6);
//#endregion
//#region node_modules/unpic/esm/src/providers/shopify.js
var shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
var { operationsGenerator: operationsGenerator$4, operationsParser: operationsParser$4 } = createOperationsHandlers({ keyMap: { format: false } });
var generate$5 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(shopifyRegex, "$1$6");
	url.search = operationsGenerator$4(operations);
	return toCanonicalUrlString(url);
};
var extract$5 = (url) => {
	const parsedUrl = toUrl(url);
	const match = shopifyRegex.exec(parsedUrl.pathname);
	const operations = operationsParser$4(parsedUrl);
	if (match) {
		const [, , , width, height, crop] = match;
		if (width && height && !operations.width && !operations.height) {
			operations.width = parseInt(width, 10);
			operations.height = parseInt(height, 10);
		}
		if (crop) operations.crop ??= crop;
	}
	parsedUrl.pathname = parsedUrl.pathname.replace(shopifyRegex, "$1$6");
	for (const key of [
		"width",
		"height",
		"crop",
		"pad_color",
		"format"
	]) parsedUrl.searchParams.delete(key);
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$5 = createExtractAndGenerate(extract$5, generate$5);
//#endregion
//#region node_modules/unpic/esm/src/providers/storyblok.js
var storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/;
var storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/;
var filterSplitterRegex = /:(?![^(]*\))/;
var splitFilters = (filters) => {
	if (!filters) return {};
	return Object.fromEntries(filters.split(filterSplitterRegex).map((filter) => {
		if (!filter) return [];
		const [key, value] = filter.split("(");
		return [key, value.replace(")", "")];
	}));
};
var generateFilters = (filters) => {
	if (!filters) return;
	const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value ?? ""})`);
	if (filterItems.length === 0) return;
	return `filters:${filterItems.join(":")}`;
};
var extract$4 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = (parsedUrl.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets).exec(parsedUrl.pathname);
	if (!matches || !matches.groups) return null;
	const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
	const { format, ...filterMap } = splitFilters(filters ?? "");
	if (parsedUrl.hostname === "img2.storyblok.com") parsedUrl.hostname = "a.storyblok.com";
	const operations = Object.fromEntries([
		["width", Number(width) || void 0],
		["height", Number(height) || void 0],
		["format", format],
		["crop", crop],
		["filters", filterMap],
		["flipx", flipx],
		["flipy", flipy]
	].filter(([_, value]) => value !== void 0));
	return {
		src: `${parsedUrl.origin}${id}`,
		operations
	};
};
var generate$4 = (src, operations) => {
	const url = toUrl(src);
	const { width = 0, height = 0, format, crop, filters = {}, flipx = "", flipy = "" } = operations;
	const size = `${flipx}${width}x${flipy}${height}`;
	if (format) filters.format = format;
	url.pathname = [
		url.pathname,
		"m",
		crop,
		size,
		generateFilters(filters)
	].filter(Boolean).join("/");
	return toCanonicalUrlString(url);
};
var transform$4 = createExtractAndGenerate(extract$4, generate$4);
//#endregion
//#region node_modules/unpic/esm/src/providers/supabase.js
var STORAGE_URL_PREFIX = "/storage/v1/object/public/";
var RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
var isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
var { operationsGenerator: operationsGenerator$3, operationsParser: operationsParser$3 } = createOperationsHandlers({});
var generate$3 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(RENDER_URL_PREFIX, STORAGE_URL_PREFIX);
	if (operations.format && operations.format !== "origin") delete operations.format;
	url.search = operationsGenerator$3(operations);
	return toCanonicalUrlString(url).replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX);
};
var extract$3 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$3(parsedUrl);
	const isRender = isRenderUrl(parsedUrl);
	const imagePath = parsedUrl.pathname.replace(RENDER_URL_PREFIX, "").replace(STORAGE_URL_PREFIX, "");
	if (!isRender) return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
	return {
		src: `${parsedUrl.origin}${STORAGE_URL_PREFIX}${imagePath}`,
		operations
	};
};
var transform$3 = createExtractAndGenerate(extract$3, generate$3);
//#endregion
//#region node_modules/unpic/esm/src/providers/uploadcare.js
var uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/;
var { operationsGenerator: operationsGenerator$2, operationsParser: operationsParser$2 } = createOperationsHandlers({
	keyMap: {
		width: false,
		height: false
	},
	defaults: { format: "auto" },
	kvSeparator: "/",
	paramSeparator: "/-/"
});
var extract$2 = (url) => {
	const parsedUrl = toUrl(url);
	const match = uploadcareRegex.exec(parsedUrl.toString());
	if (!match || !match.groups) return null;
	const { host, uuid } = match.groups;
	const [, ...operationsString] = parsedUrl.pathname.split("/-/");
	const operations = operationsParser$2(operationsString.join("/-/") || "");
	if (operations.resize) {
		const [width, height] = operations.resize.split("x");
		if (width) operations.width = parseInt(width);
		if (height) operations.height = parseInt(height);
		delete operations.resize;
	}
	return {
		src: `https://${host}/${uuid}/`,
		operations,
		options: { host }
	};
};
var generate$2 = (src, operations, options = {}) => {
	const url = toUrl(src);
	const host = options.host || url.hostname;
	const match = uploadcareRegex.exec(url.toString());
	if (match?.groups) url.pathname = `/${match.groups.uuid}/`;
	operations.resize = operations.resize || `${operations.width ?? ""}x${operations.height ?? ""}`;
	delete operations.width;
	delete operations.height;
	const modifiers = addTrailingSlash(operationsGenerator$2(operations));
	url.hostname = host;
	url.pathname = stripTrailingSlash(url.pathname) + (modifiers ? `/-/${modifiers}` : "") + (match?.groups?.filename ?? "");
	return toCanonicalUrlString(url);
};
var transform$2 = createExtractAndGenerate(extract$2, generate$2);
//#endregion
//#region node_modules/unpic/esm/src/providers/wordpress.js
var { operationsGenerator: operationsGenerator$1, operationsParser: operationsParser$1 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h"
	},
	defaults: { crop: "1" }
});
var generate$1 = (src, operations) => {
	const url = toUrl(src);
	const { crop } = operations;
	if (typeof crop !== "undefined" && crop !== "0") operations.crop = crop ? "1" : "0";
	url.search = operationsGenerator$1(operations);
	return toCanonicalUrlString(url);
};
var extract$1 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$1(parsedUrl);
	if (operations.crop !== void 0) operations.crop = operations.crop === "1";
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$1 = createExtractAndGenerate(extract$1, generate$1);
//#endregion
//#region node_modules/unpic/esm/src/providers/wsrv.js
var { operationsGenerator, operationsParser } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "output",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var extract = (url) => {
	const urlObj = toUrl(url);
	const srcParam = urlObj.searchParams.get("url");
	if (!srcParam) return null;
	let src = srcParam;
	if (!src.startsWith("http://") && !src.startsWith("https://")) src = "https://" + src;
	urlObj.searchParams.delete("url");
	const operations = operationsParser(urlObj);
	return {
		src,
		operations
	};
};
var generate = (src, operations) => {
	const url = new URL("https://wsrv.nl/");
	const cleanSrc = (typeof src === "string" ? src : src.toString()).replace(/^https?:\/\//, "");
	url.searchParams.set("url", cleanSrc);
	const params = operationsGenerator(operations);
	const searchParams = new URLSearchParams(params);
	for (const [key, value] of searchParams) if (key !== "url") url.searchParams.set(key, value);
	return toCanonicalUrlString(url);
};
//#endregion
//#region node_modules/unpic/esm/src/transform.js
var transformerMap = {
	appwrite: transform$27,
	astro: transform$26,
	"builder.io": transform$25,
	bunny: transform$24,
	cloudflare: transform$23,
	cloudflare_images: transform$22,
	cloudimage: transform$21,
	cloudinary: transform$20,
	contentful: transform$19,
	contentstack: transform$18,
	directus: transform$17,
	hygraph: transform$16,
	imageengine: transform$15,
	imagekit: transform$14,
	imgix: transform$13,
	ipx: transform$12,
	keycdn: transform$11,
	"kontent.ai": transform$10,
	netlify: transform$9,
	nextjs: transform$7,
	scene7: transform$6,
	shopify: transform$5,
	storyblok: transform$4,
	supabase: transform$3,
	uploadcare: transform$2,
	vercel: transform$8,
	wordpress: transform$1,
	wsrv: createExtractAndGenerate(extract, generate)
};
/**
* Returns a transformer function if the given CDN is supported
*/
function getTransformerForCdn(cdn) {
	if (!cdn) return;
	return transformerMap[cdn];
}
//#endregion
//#region node_modules/@unpic/core/dist/auto.mjs
function transformProps({ cdn, fallback, operations = {}, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseImageProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
function transformSourceProps({ cdn, fallback, operations, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseSourceProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-SNIEDJZS.mjs
var Image$1 = import_react.forwardRef(function Image2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...camelizeProps(transformProps(props)),
		ref
	});
});
import_react.forwardRef(function Source2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
		...camelizeProps(transformSourceProps(props)),
		ref
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/image.js
/**
* next/image shim
*
* Translates Next.js Image props to @unpic/react Image component.
* @unpic/react auto-detects CDN from URL and uses native transforms.
* For local images (relative paths), routes through `/_vinext/image`
* for server-side optimization (resize, format negotiation, quality).
*
* Remote images are validated against `images.remotePatterns` and
* `images.domains` from next.config.js. Unmatched URLs are blocked
* in production and warn in development, matching Next.js behavior.
*/
/**
* Image config injected at build time via Vite define.
* Serialized as JSON — parsed once at module level.
*/
var __imageRemotePatterns = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __imageDomains = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
var __imageDeviceSizes = (() => {
	try {
		return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
	} catch {
		return [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		];
	}
})();
/**
* Validate that a remote URL is allowed by the configured remote patterns.
* Returns true if the URL is allowed, false otherwise.
*
* When no remotePatterns/domains are configured, all remote URLs are allowed
* (backwards-compatible — user hasn't opted into restriction).
*
* When patterns ARE configured, only matching URLs are allowed.
* In development, non-matching URLs produce a console warning.
* In production, non-matching URLs are blocked (src replaced with empty string).
*
* Private-IP hostnames are additionally rejected unless dangerouslyAllowLocalIP
* is set, mirroring Next.js's fetchExternalImage guard.
*/
function validateRemoteUrl(src) {
	let url;
	try {
		url = new URL(src, "http://n");
	} catch {
		return {
			allowed: false,
			reason: `Invalid URL: ${src}`
		};
	}
	if (isPrivateIp(url.hostname)) return {
		allowed: false,
		reason: `Image URL "${src}" resolved to private IP. If this is expected and you understand SSRF risk, use images.dangerouslyAllowLocalIP = true to continue.`
	};
	if (!__hasImageConfig) return { allowed: true };
	if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) return { allowed: true };
	return {
		allowed: false,
		reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
	};
}
/**
* A version of useLayoutEffect that doesn't warn during SSR.
* Do not rename this to "isomorphic layout effect". There is no such thing as
* an isomorphic Layout Effect since there is no Layout on the server.
* Ported from Next.js: https://github.com/vercel/next.js/pull/93209
*/
var useNonWarningLayoutEffect = typeof window === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
/**
* Create a synthetic React load event for replaying onLoad/onLoadingComplete
* during hydration when the image already completed loading.
*
* This function creates a native Event("load") via the DOM Event constructor
* and must only be called in a browser context (client-side layout effect).
* It mirrors the pattern used in Next.js `handleLoading`.
*/
function createSyntheticLoadEvent(img) {
	const nativeEvent = new Event("load");
	Object.defineProperty(nativeEvent, "target", {
		writable: false,
		value: img
	});
	let prevented = false;
	let stopped = false;
	return {
		bubbles: nativeEvent.bubbles,
		cancelable: nativeEvent.cancelable,
		currentTarget: img,
		defaultPrevented: false,
		eventPhase: nativeEvent.eventPhase,
		isTrusted: false,
		nativeEvent,
		target: img,
		timeStamp: nativeEvent.timeStamp,
		type: "load",
		isDefaultPrevented: () => prevented,
		isPropagationStopped: () => stopped,
		persist: () => {},
		preventDefault: () => {
			prevented = true;
			nativeEvent.preventDefault();
		},
		stopPropagation: () => {
			stopped = true;
			nativeEvent.stopPropagation();
		}
	};
}
/**
* Sanitize a blurDataURL to prevent CSS injection.
*
* A crafted data URL containing `)` can break out of the `url()` CSS function,
* allowing injection of arbitrary CSS properties or rules. Characters like `{`,
* `}`, and `\` can also assist in crafting injection payloads.
*
* This validates the URL starts with `data:image/` and rejects characters that
* could escape the `url()` context. Semicolons are allowed since they're part
* of valid data URLs (`data:image/png;base64,...`) and harmless inside `url()`.
*
* Returns undefined for invalid URLs, which causes the blur placeholder to be
* skipped gracefully.
*/
function sanitizeBlurDataURL(url) {
	if (!url.startsWith("data:image/")) return void 0;
	if (/[)(}{\\'"\n\r]/.test(url)) return void 0;
	return url;
}
/**
* Determine if a src is a remote URL (CDN-optimizable) or local.
*/
function isRemoteUrl(src) {
	return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
/**
* Resolve src, width, height, blurDataURL from Image props (string or StaticImageData).
* Shared by the Image component and getImageProps to keep behavior in sync.
*/
function resolveImageSource(v) {
	return {
		src: typeof v.src === "string" ? v.src : v.src.src,
		width: v.width ?? (typeof v.src === "object" ? v.src.width : void 0),
		height: v.height ?? (typeof v.src === "object" ? v.src.height : void 0),
		blurDataURL: v.blurDataURL ?? (typeof v.src === "object" ? v.src.blurDataURL : void 0)
	};
}
/**
* Responsive image widths matching Next.js's device sizes config.
* These are the breakpoints used for srcSet generation.
* Configurable via `images.deviceSizes` in next.config.js.
*/
var RESPONSIVE_WIDTHS = __imageDeviceSizes;
/**
* Build a `/_vinext/image` optimization URL.
*
* In production (Cloudflare Workers), the worker intercepts this path and uses
* the Images binding to resize/transcode on the fly. In dev, the Vite dev
* server handles it as a passthrough (serves the original file).
*/
function imageOptimizationUrl(src, width, quality = 75) {
	return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
/**
* Generate a srcSet string for responsive images.
*
* Each width points to the `/_vinext/image` optimization endpoint so the
* server can resize and transcode the image. Only includes widths that are
* <= 2x the original image width to avoid pointless upscaling.
*/
function generateSrcSet(src, originalWidth, quality = 75) {
	const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
	if (widths.length === 0) return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
	return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
var Image = (0, import_react.forwardRef)(function Image({ src: srcProp, alt, width, height, fill, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, onLoad, onLoadingComplete, onError, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
	const lastLoadedSrcRef = (0, import_react.useRef)(void 0);
	const lastErrorSrcRef = (0, import_react.useRef)(void 0);
	const didInsertRef = (0, import_react.useRef)(false);
	const imgElementRef = (0, import_react.useRef)(null);
	const mergedRef = useMergedRef(ref, imgElementRef);
	const onLoadRef = (0, import_react.useRef)(onLoad);
	(0, import_react.useEffect)(() => {
		onLoadRef.current = onLoad;
	}, [onLoad]);
	const onErrorRef = (0, import_react.useRef)(onError);
	(0, import_react.useEffect)(() => {
		onErrorRef.current = onError;
	}, [onError]);
	const onLoadingCompleteRef = (0, import_react.useRef)(onLoadingComplete);
	(0, import_react.useEffect)(() => {
		onLoadingCompleteRef.current = onLoadingComplete;
	}, [onLoadingComplete]);
	const { src, width: imgWidth, height: imgHeight, blurDataURL: imgBlurDataURL } = resolveImageSource({
		src: srcProp,
		width,
		height,
		blurDataURL
	});
	useNonWarningLayoutEffect(() => {
		if (!didInsertRef.current && imgElementRef.current !== null) {
			const img = imgElementRef.current;
			if (onErrorRef.current) img.src = img.src;
			if (img.complete && img.naturalWidth > 0) {
				const currentOnLoad = onLoadRef.current;
				const currentOnLoadingComplete = onLoadingCompleteRef.current;
				if (currentOnLoad || currentOnLoadingComplete) {
					if (lastLoadedSrcRef.current !== src) {
						lastLoadedSrcRef.current = src;
						const syntheticEvent = createSyntheticLoadEvent(img);
						currentOnLoad?.(syntheticEvent);
						currentOnLoadingComplete?.(img);
					}
				}
			}
			didInsertRef.current = true;
		}
	}, [
		placeholder,
		sizes,
		_unoptimized
	]);
	const handleLoad = onLoadingComplete ? (e) => {
		if (lastLoadedSrcRef.current === src) return;
		lastLoadedSrcRef.current = src;
		onLoad?.(e);
		onLoadingComplete(e.currentTarget);
	} : onLoad ? (e) => {
		if (lastLoadedSrcRef.current === src) return;
		lastLoadedSrcRef.current = src;
		onLoad(e);
	} : void 0;
	const handleError = onError ? (e) => {
		if (lastErrorSrcRef.current === src) return;
		lastErrorSrcRef.current = src;
		onError(e);
	} : void 0;
	if (loader) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref: mergedRef,
		src: loader({
			src,
			width: imgWidth ?? 0,
			quality: quality ?? 75
		}),
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		decoding: "async",
		sizes,
		className,
		onLoad: handleLoad,
		onError: handleError,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...style
		} : style,
		...rest
	});
	if (isRemoteUrl(src)) {
		const validation = validateRemoteUrl(src);
		if (!validation.allowed) {
			console.error(`[next/image] ${validation.reason}`);
			return null;
		}
		const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
		const bg = placeholder === "blur" && sanitizedBlur ? `url(${sanitizedBlur})` : void 0;
		if (fill) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, {
			src,
			alt,
			layout: "fullWidth",
			loading: priority ? "eager" : loading ?? "lazy",
			fetchPriority: priority ? "high" : void 0,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad,
			onError: handleError,
			ref: mergedRef
		});
		if (imgWidth && imgHeight) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, {
			src,
			alt,
			width: imgWidth,
			height: imgHeight,
			layout: "constrained",
			loading: priority ? "eager" : loading ?? "lazy",
			fetchPriority: priority ? "high" : void 0,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad,
			onError: handleError,
			ref: mergedRef
		});
	}
	const imgQuality = quality ?? 75;
	const isSvg = src.endsWith(".svg");
	const skipOptimization = _unoptimized === true || isSvg && true;
	const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
	const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
	const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
	const blurStyle = placeholder === "blur" && sanitizedLocalBlur ? {
		backgroundImage: `url(${sanitizedLocalBlur})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref: mergedRef,
		src: optimizedSrc,
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		fetchPriority: priority ? "high" : void 0,
		decoding: "async",
		srcSet,
		sizes: sizes ?? (fill ? "100vw" : void 0),
		className,
		"data-nimg": fill ? "fill" : "1",
		onLoad: handleLoad,
		onError: handleError,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...blurStyle,
			...style
		} : {
			...blurStyle,
			...style
		},
		...rest
	});
});
//#endregion
//#region app/components/Hardware.tsx
function PegPin({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `peg-pin ${className}`,
		"aria-hidden": "true"
	});
}
function PaperClip({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `paper-clip ${className}`,
		"aria-hidden": "true"
	});
}
function BoardHook({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `board-hook ${className}`,
		"aria-hidden": "true"
	});
}
//#endregion
//#region node_modules/vinext/dist/routing/utils.js
var PATH_DELIMITER_REGEX = /([/#?\\]|%(2f|23|3f|5c))/gi;
function encodePathDelimiters(segment) {
	return segment.replace(PATH_DELIMITER_REGEX, (char) => encodeURIComponent(char));
}
/**
* Decode a filesystem or URL path segment while preserving encoded path delimiters.
* Mirrors Next.js segment-wise decoding so "%5F" becomes "_" but "%2F" stays "%2F".
*/
function decodeRouteSegment(segment) {
	try {
		return encodePathDelimiters(decodeURIComponent(segment));
	} catch {
		return segment;
	}
}
/**
* Normalize a pathname for route matching by decoding each segment independently.
* This prevents encoded slashes from turning into real path separators.
*/
function normalizePathnameForRouteMatch(pathname) {
	return pathname.split("/").map((segment) => decodeRouteSegment(segment)).join("/");
}
function decodeMatchedParam(value) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
/**
* Decode captured route params with `decodeURIComponent`, mirroring Next.js
* route-matcher.ts:25-27. Mutates the params object in place. Catch-all
* arrays are decoded element-wise. Malformed escapes are preserved (the
* strict normalization layer rejects them at the request boundary).
*/
function decodeMatchedParams(params) {
	for (const key of Object.keys(params)) {
		const value = params[key];
		if (Array.isArray(value)) params[key] = value.map(decodeMatchedParam);
		else params[key] = decodeMatchedParam(value);
	}
}
//#endregion
//#region node_modules/vinext/dist/routing/route-trie.js
function createNode() {
	return {
		staticChildren: /* @__PURE__ */ new Map(),
		dynamicChild: null,
		catchAllChild: null,
		optionalCatchAllChild: null,
		route: null
	};
}
/**
* Build a trie from pre-sorted routes.
*
* Routes must have a `patternParts` property (string[] of URL segments).
* Pattern segment conventions:
*   - `:name`  — dynamic segment
*   - `:name+` — catch-all (1+ segments)
*   - `:name*` — optional catch-all (0+ segments)
*   - anything else — static segment
*
* First route to claim a terminal position wins (routes are pre-sorted
* by precedence, so insertion order preserves correct priority).
*/
function buildRouteTrie(routes) {
	const root = createNode();
	for (const route of routes) {
		const parts = route.patternParts;
		if (parts.length === 0) {
			if (root.route === null) root.route = route;
			continue;
		}
		let node = root;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (part.endsWith("+") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.catchAllChild === null) node.catchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.endsWith("*") && part.startsWith(":")) {
				if (i !== parts.length - 1) break;
				const paramName = part.slice(1, -1);
				if (node.optionalCatchAllChild === null) node.optionalCatchAllChild = {
					paramName,
					route
				};
				break;
			}
			if (part.startsWith(":")) {
				const paramName = part.slice(1);
				if (node.dynamicChild === null) node.dynamicChild = {
					paramName,
					node: createNode()
				};
				node = node.dynamicChild.node;
				if (i === parts.length - 1) {
					if (node.route === null) node.route = route;
				}
				continue;
			}
			let child = node.staticChildren.get(part);
			if (!child) {
				child = createNode();
				node.staticChildren.set(part, child);
			}
			node = child;
			if (i === parts.length - 1) {
				if (node.route === null) node.route = route;
			}
		}
	}
	return root;
}
/**
* Match a URL against the trie.
*
* Returns decoded param values — `decodeURIComponent` is applied to
* individual param entries so that `%2F` → `/`, `%23` → `#`, etc.
* Segment boundaries (the original `/` splits) are preserved by the
* upstream normalization layer; this step only decodes the captured
* param strings the caller sees.
*
* Mirrors Next.js route-matcher.ts:25-27.
*
* @param root - Trie root built by `buildRouteTrie`
* @param urlParts - Pre-split URL segments (no empty strings)
* @returns Match result with route and extracted params, or null
*/
function trieMatch(root, urlParts) {
	const result = match(root, urlParts, 0);
	if (result) decodeMatchedParams(result.params);
	return result;
}
function createParams() {
	return Object.create(null);
}
function match(node, urlParts, index) {
	if (index === urlParts.length) {
		if (node.route !== null) return {
			route: node.route,
			params: createParams()
		};
		if (node.optionalCatchAllChild !== null) return {
			route: node.optionalCatchAllChild.route,
			params: createParams()
		};
		return null;
	}
	const segment = urlParts[index];
	const staticChild = node.staticChildren.get(segment);
	if (staticChild) {
		const result = match(staticChild, urlParts, index + 1);
		if (result !== null) return result;
	}
	if (node.dynamicChild !== null) {
		const result = match(node.dynamicChild.node, urlParts, index + 1);
		if (result !== null) {
			result.params[node.dynamicChild.paramName] = segment;
			return result;
		}
	}
	if (node.catchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.catchAllChild.paramName] = remaining;
		return {
			route: node.catchAllChild.route,
			params
		};
	}
	if (node.optionalCatchAllChild !== null) {
		const remaining = urlParts.slice(index);
		const params = createParams();
		params[node.optionalCatchAllChild.paramName] = remaining;
		return {
			route: node.optionalCatchAllChild.route,
			params
		};
	}
	return null;
}
//#endregion
//#region node_modules/vinext/dist/routing/route-matching.js
/**
* Shared route-match preamble used by both Pages Router and App Router.
*
* Both routers normalize URLs and call `trieMatch` with nearly-identical
* preamble: strip query, trailing-slash normalize, run
* `normalizePathnameForRouteMatch`, split into url parts, then look up via a
* per-routes-array trie cache. This module factors that out so each router
* just calls `matchRouteWithTrie(url, routes)`.
*/
function createRouteTrieCache() {
	return /* @__PURE__ */ new WeakMap();
}
function getOrBuildTrie(cache, routes) {
	let trie = cache.get(routes);
	if (!trie) {
		trie = buildRouteTrie(routes);
		cache.set(routes, trie);
	}
	return trie;
}
/**
* Match a URL path against a list of routes via the shared preamble:
*   1. strip query string
*   2. trailing-slash normalize (preserving root "/")
*   3. run `normalizePathnameForRouteMatch`
*   4. split into url parts and look up via the (cached) trie
*
* Generic over the route shape; both Pages `Route` and App `AppRoute`
* satisfy `{ patternParts: string[] }`.
*/
function matchRouteWithTrie(url, routes, cache) {
	const pathname = url.split("?")[0];
	let normalizedUrl = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
	normalizedUrl = normalizePathnameForRouteMatch(normalizedUrl);
	const urlParts = normalizedUrl.split("/").filter(Boolean);
	return trieMatch(getOrBuildTrie(cache, routes), urlParts);
}
//#endregion
//#region node_modules/vinext/dist/shims/i18n-context.js
var _getI18nContext = () => {
	if (globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null) return null;
	return {
		locale: globalThis.__VINEXT_LOCALE__,
		locales: globalThis.__VINEXT_LOCALES__,
		defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
		domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
		hostname: globalThis.__VINEXT_HOSTNAME__
	};
};
function getI18nContext() {
	return _getI18nContext();
}
//#endregion
//#region node_modules/vinext/dist/shims/link-prefetch.js
function canLinkPrefetch(input) {
	return input.nodeEnv === "production" && input.prefetch !== false && !input.isDangerous;
}
/**
* Normalize absolute and protocol-relative Link hrefs to app-relative paths
* that are eligible for prefetching. Non-absolute relative hrefs are returned
* unchanged; callers must resolve them against the current browser URL before
* constructing a concrete fetch target.
*/
function getLinkPrefetchHref(input) {
	const { href, basePath, currentOrigin } = input;
	if (!isAbsoluteOrProtocolRelative(href)) return href;
	if (currentOrigin === void 0) return null;
	try {
		const current = new URL(currentOrigin);
		const parsed = href.startsWith("//") ? new URL(href, current.origin) : new URL(href);
		if (parsed.origin !== current.origin) return null;
		if (!basePath) return parsed.pathname + parsed.search + parsed.hash;
		if (!hasBasePath(parsed.pathname, basePath)) return null;
		return stripBasePath(parsed.pathname, basePath) + parsed.search + parsed.hash;
	} catch {
		return null;
	}
}
function isAbsoluteOrProtocolRelative(href) {
	return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
}
//#endregion
//#region node_modules/vinext/dist/shims/link.js
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
var LinkStatusContext = (0, import_react.createContext)({ pending: false });
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
var linkPrefetchRouteTrieCache = createRouteTrieCache();
function resolveHref(href) {
	if (typeof href === "string") return href;
	let url = href.pathname ?? "/";
	if (href.query) {
		const params = urlQueryToSearchParams(href.query);
		url = appendSearchParamsToUrl(url, params);
	}
	return url;
}
function resolveLinkPrefetchMode(prefetchProp, isDangerous) {
	if (isDangerous || prefetchProp === false) return "disabled";
	if (prefetchProp === true) return "full";
	return "auto";
}
function toSameOriginRouteHref(href) {
	if (typeof window === "undefined") return null;
	let url;
	try {
		url = new URL(href, window.location.href);
	} catch {
		return null;
	}
	if (url.origin !== window.location.origin) return null;
	return `${stripBasePath(url.pathname, __basePath)}${url.search}`;
}
function canAutoPrefetchFullAppRoute(href) {
	if (typeof window === "undefined") return false;
	const routes = window.__VINEXT_LINK_PREFETCH_ROUTES__;
	if (!routes) return false;
	const routeHref = toSameOriginRouteHref(href);
	if (routeHref === null) return false;
	const match = matchRouteWithTrie(routeHref, routes, linkPrefetchRouteTrieCache);
	if (!match) return false;
	return !match.route.isDynamic;
}
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
function prefetchUrl(href, mode, priority = "low") {
	if (typeof window === "undefined") return;
	const prefetchHref = getLinkPrefetchHref({
		href,
		basePath: __basePath,
		currentOrigin: window.location.origin
	});
	if (prefetchHref == null) return;
	const fullHref = toBrowserNavigationHref(prefetchHref, window.location.href, __basePath);
	(window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100)))(() => {
		(async () => {
			if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") {
				if (mode === "auto" && !canAutoPrefetchFullAppRoute(prefetchHref)) return;
				const interceptionContext = getCurrentInterceptionContext();
				const mountedSlotsHeader = getMountedSlotsHeader();
				const headers = createRscRequestHeaders({ interceptionContext });
				if (mountedSlotsHeader) headers.set(VINEXT_MOUNTED_SLOTS_HEADER, mountedSlotsHeader);
				const rscUrl = await createRscRequestUrl(fullHref, headers);
				const cacheKey = AppElementsWire.encodeCacheKey(rscUrl, interceptionContext);
				const prefetched = getPrefetchedUrls();
				if (prefetched.has(cacheKey)) return;
				prefetched.add(cacheKey);
				prefetchRscResponse(rscUrl, fetch(rscUrl, {
					headers,
					credentials: "include",
					priority,
					purpose: "prefetch"
				}), interceptionContext, mountedSlotsHeader);
			} else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
				const link = document.createElement("link");
				link.rel = "prefetch";
				link.href = fullHref;
				link.as = "document";
				document.head.appendChild(link);
			}
		})().catch((error) => {
			console.error("[vinext] RSC prefetch setup error:", error);
		});
	});
}
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
var sharedObserver = null;
var observerCallbacks = /* @__PURE__ */ new WeakMap();
function getSharedObserver() {
	if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return null;
	if (sharedObserver) return sharedObserver;
	sharedObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) if (entry.isIntersecting) {
			const callback = observerCallbacks.get(entry.target);
			if (callback) {
				callback();
				sharedObserver?.unobserve(entry.target);
				observerCallbacks.delete(entry.target);
			}
		}
	}, { rootMargin: "250px" });
	return sharedObserver;
}
function getDefaultLocale() {
	if (typeof window !== "undefined") return window.__VINEXT_DEFAULT_LOCALE__;
	return getI18nContext()?.defaultLocale;
}
function getDomainLocales() {
	if (typeof window !== "undefined") return window.__NEXT_DATA__?.domainLocales;
	return getI18nContext()?.domainLocales;
}
function getCurrentHostname() {
	if (typeof window !== "undefined") return window.location.hostname;
	return getI18nContext()?.hostname;
}
function getDomainLocaleHref(href, locale) {
	return getDomainLocaleUrl(href, locale, {
		basePath: __basePath,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
function applyLocaleToHref(href, locale) {
	if (locale === false) return href;
	if (locale === void 0) return href;
	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) return href;
	const domainLocaleHref = getDomainLocaleHref(href, locale);
	if (domainLocaleHref) return domainLocaleHref;
	return addLocalePrefix(href, locale, getDefaultLocale() ?? "");
}
var Link = (0, import_react.forwardRef)(function Link({ href, as, replace = false, prefetch: prefetchProp, scroll = true, children, onClick, onMouseEnter, onTouchStart, onNavigate, ...rest }, forwardedRef) {
	const { locale, ...restWithoutLocale } = rest;
	const resolvedHref = as ?? resolveHref(href);
	const isDangerous = typeof resolvedHref === "string" && isDangerousScheme(resolvedHref);
	const localizedHref = applyLocaleToHref(isDangerous ? "/" : resolvedHref, locale);
	const fullHref = withBasePath(localizedHref, __basePath);
	const [pending, setPending] = (0, import_react.useState)(false);
	const mountedRef = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	const internalRef = (0, import_react.useRef)(null);
	const prefetchMode = resolveLinkPrefetchMode(prefetchProp, isDangerous);
	const shouldPrefetch = canLinkPrefetch({
		nodeEnv: "production",
		prefetch: prefetchProp,
		isDangerous
	});
	const setRefs = (0, import_react.useCallback)((node) => {
		internalRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);
	(0, import_react.useEffect)(() => {
		if (!shouldPrefetch || typeof window === "undefined") return;
		const node = internalRef.current;
		if (!node) return;
		const hrefToPrefetch = getLinkPrefetchHref({
			href: localizedHref,
			basePath: __basePath,
			currentOrigin: window.location.origin
		});
		if (hrefToPrefetch == null) return;
		const observer = getSharedObserver();
		if (!observer) return;
		observerCallbacks.set(node, () => prefetchUrl(hrefToPrefetch, prefetchMode, "low"));
		observer.observe(node);
		return () => {
			observer.unobserve(node);
			observerCallbacks.delete(node);
		};
	}, [
		shouldPrefetch,
		prefetchMode,
		localizedHref
	]);
	const prefetchOnIntent = (0, import_react.useCallback)(() => {
		if (!shouldPrefetch) return;
		prefetchUrl(localizedHref, prefetchMode, "high");
	}, [
		shouldPrefetch,
		prefetchMode,
		localizedHref
	]);
	const handleMouseEnter = (0, import_react.useCallback)((e) => {
		onMouseEnter?.(e);
		prefetchOnIntent();
	}, [onMouseEnter, prefetchOnIntent]);
	const handleTouchStart = (0, import_react.useCallback)((e) => {
		onTouchStart?.(e);
		prefetchOnIntent();
	}, [onTouchStart, prefetchOnIntent]);
	const handleClick = async (e) => {
		if (onClick) onClick(e);
		if (e.defaultPrevented) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		if (e.currentTarget.target && e.currentTarget.target !== "_self") return;
		let navigateHref = localizedHref;
		if (resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://") || resolvedHref.startsWith("//")) {
			const localPath = toSameOriginAppPath(resolvedHref, __basePath);
			if (localPath == null) return;
			navigateHref = localPath;
		}
		e.preventDefault();
		const absoluteHref = resolveRelativeHref(navigateHref, window.location.href, __basePath);
		const absoluteFullHref = toBrowserNavigationHref(navigateHref, window.location.href, __basePath);
		if (onNavigate) try {
			const navUrl = new URL(absoluteFullHref, window.location.origin);
			let prevented = false;
			const navEvent = {
				url: navUrl,
				preventDefault() {
					prevented = true;
				},
				get defaultPrevented() {
					return prevented;
				}
			};
			onNavigate(navEvent);
			if (navEvent.defaultPrevented) return;
		} catch {}
		if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") {
			setPending(true);
			import_react.startTransition(() => {
				navigateClientSide(navigateHref, replace ? "replace" : "push", scroll, true).finally(() => {
					if (mountedRef.current) setPending(false);
				});
			});
			return;
		} else try {
			const Router = (await import("./router-Cy5tyrgt.js")).default;
			if (replace) await Router.replace(absoluteHref, void 0, { scroll });
			else await Router.push(absoluteHref, void 0, { scroll });
		} catch {
			if (replace) window.history.replaceState({}, "", absoluteFullHref);
			else window.history.pushState({}, "", absoluteFullHref);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
	};
	const { passHref: _p, ...anchorProps } = restWithoutLocale;
	const linkStatusValue = import_react.useMemo(() => ({ pending }), [pending]);
	if (isDangerous) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		...anchorProps,
		onMouseEnter: handleMouseEnter,
		onTouchStart: handleTouchStart,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkStatusContext.Provider, {
		value: linkStatusValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			ref: setRefs,
			href: fullHref,
			onClick: (event) => {
				handleClick(event);
			},
			onMouseEnter: handleMouseEnter,
			onTouchStart: handleTouchStart,
			...anchorProps,
			children
		})
	});
});
//#endregion
//#region app/lib/soundEffects.ts
var pageFlipAudio = null;
var pageFlipAudioPreloaded = false;
function getPageFlipAudio() {
	pageFlipAudio ??= new Audio("/page-flip.mp3");
	pageFlipAudio.preload = "auto";
	return pageFlipAudio;
}
function preloadPageFlipSound() {
	if (pageFlipAudioPreloaded) return;
	getPageFlipAudio().load();
	pageFlipAudioPreloaded = true;
}
function playPageFlipSound() {
	const audio = getPageFlipAudio();
	audio.pause();
	audio.currentTime = 0;
	audio.muted = false;
	audio.volume = .32;
	audio.play().catch(() => void 0);
}
//#endregion
//#region app/components/ProjectFile.tsx
function ProjectFile({ project, className = "", compact, disabled = false, pegboardDragId, onOpenProject }) {
	const router = useRouter();
	const [isOpening, setIsOpening] = (0, import_react.useState)(false);
	const [openingStyle, setOpeningStyle] = (0, import_react.useState)();
	const href = `/projects/${project.slug}`;
	(0, import_react.useEffect)(() => {
		preloadPageFlipSound();
		return () => document.body.classList.remove("project-opening");
	}, []);
	function openProject(event) {
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		event.preventDefault();
		if (isOpening) return;
		playPageFlipSound();
		const element = event.currentTarget;
		const board = element.closest(".fixed-board, .project-pegboard");
		if (board) sessionStorage.setItem("portfolio-board-scroll", String(board.scrollTop));
		const rect = element.getBoundingClientRect();
		setOpeningStyle({
			"--project-origin-left": `${rect.left}px`,
			"--project-origin-top": `${rect.top}px`,
			"--project-origin-width": `${rect.width}px`,
			"--project-origin-height": `${rect.height}px`,
			"--project-shift-x": `${window.innerWidth / 2 - (rect.left + rect.width / 2)}px`,
			"--project-shift-y": `${window.innerHeight / 2 - (rect.top + rect.height / 2)}px`
		});
		setIsOpening(true);
		document.body.classList.add("project-opening");
		const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (onOpenProject) {
			window.setTimeout(() => onOpenProject(project, element), reducedMotion ? 0 : board?.classList.contains("fixed-board") ? 240 : 0);
			window.setTimeout(() => {
				setIsOpening(false);
				document.body.classList.remove("project-opening");
			}, reducedMotion ? 0 : 620);
		} else window.setTimeout(() => router.push(href), reducedMotion ? 0 : 420);
	}
	const projectContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "project-file__back-sheet",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "project-file__document",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperClip, { className: "project-file__clip" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-file__tab",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-file__eyebrow",
					children: project.eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-file__title",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-file__metric",
					children: project.metric
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-file__label",
					children: project.metricLabel
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "project-holder",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "project-holder__mesh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "project-holder__lip" })]
		})
	] });
	const projectClassName = `project-file project-file--${project.slug} ${compact ? "project-file--compact" : ""} ${isOpening ? "is-opening" : ""} ${className}`;
	if (disabled) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: projectClassName,
		"aria-label": `${project.title} project`,
		"data-peg-draggable": pegboardDragId,
		children: projectContent
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: projectClassName,
		"data-peg-draggable": pegboardDragId,
		href,
		onClick: openProject,
		style: openingStyle,
		children: projectContent
	});
}
//#endregion
//#region app/hooks/usePegboardDrag.ts
var DESKTOP_DRAG_QUERY = "(min-width: 1100px) and (hover: hover) and (pointer: fine)";
var DRAG_THRESHOLD = 6;
var COLLISION_GAP = 16;
var BOARD_PADDING = 22;
var ANCHOR_STEP_X = 29;
var ANCHOR_STEP_Y = 27;
function numberFromDataset(value) {
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : 0;
}
function relativeBox(element, boardBox) {
	const rect = element.getBoundingClientRect();
	const [leftRatio, topRatio, rightRatio, bottomRatio] = (element.dataset.pegBounds ?? "0,0,0,0").split(",").map((value) => Number.parseFloat(value) || 0);
	const insetLeft = rect.width * leftRatio;
	const insetTop = rect.height * topRatio;
	const insetRight = rect.width * rightRatio;
	const insetBottom = rect.height * bottomRatio;
	const width = rect.width - insetLeft - insetRight;
	const height = rect.height - insetTop - insetBottom;
	return {
		bottom: rect.bottom - boardBox.top - insetBottom,
		height,
		left: rect.left - boardBox.left + insetLeft,
		right: rect.right - boardBox.left - insetRight,
		top: rect.top - boardBox.top + insetTop,
		width
	};
}
function boxAt(point, width, height) {
	return {
		bottom: point.y + height,
		height,
		left: point.x,
		right: point.x + width,
		top: point.y,
		width
	};
}
function overlaps$1(a, b, gap = COLLISION_GAP) {
	return !(a.right + gap <= b.left || a.left >= b.right + gap || a.bottom + gap <= b.top || a.top >= b.bottom + gap);
}
function cornerInsideRoundedBoard(x, y, width, height, radius) {
	const left = x < radius;
	const right = x > width - radius;
	const top = y < radius;
	const bottom = y > height - radius;
	if (!left && !right || !top && !bottom) return true;
	const centerX = left ? radius : width - radius;
	const centerY = top ? radius : height - radius;
	return (x - centerX) ** 2 + (y - centerY) ** 2 <= radius ** 2;
}
function fitsBoard(box, width, height, radius) {
	if (box.left < BOARD_PADDING || box.top < BOARD_PADDING || box.right > width - BOARD_PADDING || box.bottom > height - BOARD_PADDING) return false;
	return [
		[box.left, box.top],
		[box.right, box.top],
		[box.left, box.bottom],
		[box.right, box.bottom]
	].every(([x, y]) => cornerInsideRoundedBoard(x, y, width, height, radius));
}
function isValid(box, others, boardWidth, boardHeight, radius) {
	return fitsBoard(box, boardWidth, boardHeight, radius) && !others.some((other) => overlaps$1(box, other));
}
function nearestAnchor(desired, itemSize, others, boardSize, radius) {
	const candidates = [];
	const maxX = boardSize.width - BOARD_PADDING - itemSize.width;
	const maxY = boardSize.height - BOARD_PADDING - itemSize.height;
	for (let y = BOARD_PADDING; y <= maxY; y += ANCHOR_STEP_Y) for (let x = BOARD_PADDING; x <= maxX; x += ANCHOR_STEP_X) candidates.push({
		x,
		y,
		distance: (x - desired.x) ** 2 + (y - desired.y) ** 2
	});
	candidates.sort((a, b) => a.distance - b.distance);
	for (const candidate of candidates) if (isValid(boxAt(candidate, itemSize.width, itemSize.height), others, boardSize.width, boardSize.height, radius)) return {
		x: candidate.x,
		y: candidate.y
	};
	return null;
}
function setOffset(element, point) {
	element.dataset.pegX = String(point.x);
	element.dataset.pegY = String(point.y);
	element.style.translate = `${point.x}px ${point.y}px`;
}
function usePegboardDrag(boardRef, previewRef, onPlaced) {
	(0, import_react.useEffect)(() => {
		const board = boardRef.current;
		const preview = previewRef.current;
		if (!board || !preview) return;
		const desktopQuery = window.matchMedia(DESKTOP_DRAG_QUERY);
		let active = null;
		let suppressedElement = null;
		let suppressClickUntil = 0;
		const draggableItems = () => Array.from(board.querySelectorAll("[data-peg-draggable]"));
		function hidePreview() {
			preview.classList.remove("is-visible");
		}
		function showPreview(point, width, height) {
			preview.style.left = `${point.x}px`;
			preview.style.top = `${point.y}px`;
			preview.style.width = `${width}px`;
			preview.style.height = `${height}px`;
			preview.classList.add("is-visible");
		}
		function resetArrangement() {
			hidePreview();
			draggableItems().forEach((item) => {
				delete item.dataset.pegX;
				delete item.dataset.pegY;
				item.classList.remove("is-peg-dragging", "is-peg-settling");
				item.style.removeProperty("translate");
				item.style.removeProperty("scale");
				item.style.removeProperty("z-index");
				item.removeAttribute("aria-grabbed");
			});
			active = null;
		}
		function onPointerDown(event) {
			if (!desktopQuery.matches || event.button !== 0 || active) return;
			const origin = event.target;
			if (!(origin instanceof Element)) return;
			const element = origin.closest("[data-peg-draggable]");
			if (!element || !board.contains(element)) return;
			const startRect = relativeBox(element, board.getBoundingClientRect());
			const startOffset = {
				x: numberFromDataset(element.dataset.pegX),
				y: numberFromDataset(element.dataset.pegY)
			};
			active = {
				candidate: null,
				element,
				lastSafeOffset: startOffset,
				moved: false,
				pointerId: event.pointerId,
				startOffset,
				startPointer: {
					x: event.clientX,
					y: event.clientY
				},
				startRect,
				zIndex: element.style.zIndex
			};
		}
		function onPointerMove(event) {
			if (!active || event.pointerId !== active.pointerId) return;
			const delta = {
				x: event.clientX - active.startPointer.x,
				y: event.clientY - active.startPointer.y
			};
			if (!active.moved && Math.hypot(delta.x, delta.y) < DRAG_THRESHOLD) return;
			event.preventDefault();
			if (!active.moved) {
				active.moved = true;
				active.element.setPointerCapture(event.pointerId);
				active.element.classList.add("is-peg-dragging");
				active.element.setAttribute("aria-grabbed", "true");
				active.element.style.zIndex = "100";
			}
			const boardBox = board.getBoundingClientRect();
			const boardStyle = window.getComputedStyle(board);
			const radius = Math.max(BOARD_PADDING, Number.parseFloat(boardStyle.borderTopLeftRadius) || 0);
			const others = draggableItems().filter((item) => item !== active?.element).map((item) => relativeBox(item, boardBox));
			const desired = {
				x: active.startRect.left + delta.x,
				y: active.startRect.top + delta.y
			};
			const itemSize = {
				width: active.startRect.width,
				height: active.startRect.height
			};
			const boardSize = {
				width: boardBox.width,
				height: boardBox.height
			};
			const candidate = nearestAnchor(desired, itemSize, others, boardSize, radius);
			active.candidate = candidate;
			if (candidate) showPreview(candidate, itemSize.width, itemSize.height);
			else hidePreview();
			if (isValid(boxAt(desired, itemSize.width, itemSize.height), others, boardSize.width, boardSize.height, radius)) {
				const nextOffset = {
					x: active.startOffset.x + delta.x,
					y: active.startOffset.y + delta.y
				};
				active.lastSafeOffset = nextOffset;
				setOffset(active.element, nextOffset);
			}
		}
		function finishDrag(event) {
			if (!active || event.pointerId !== active.pointerId) return;
			const drag = active;
			active = null;
			hidePreview();
			if (drag.element.hasPointerCapture(event.pointerId)) drag.element.releasePointerCapture(event.pointerId);
			if (!drag.moved) return;
			const boardBox = board.getBoundingClientRect();
			const currentRect = relativeBox(drag.element, boardBox);
			const currentOffset = {
				x: numberFromDataset(drag.element.dataset.pegX),
				y: numberFromDataset(drag.element.dataset.pegY)
			};
			const destination = drag.candidate ? {
				x: currentOffset.x + drag.candidate.x - currentRect.left,
				y: currentOffset.y + drag.candidate.y - currentRect.top
			} : drag.startOffset;
			const placedInNewPosition = Boolean(drag.candidate && Math.hypot(destination.x - drag.startOffset.x, destination.y - drag.startOffset.y) > 1);
			drag.element.classList.remove("is-peg-dragging");
			drag.element.classList.add("is-peg-settling");
			drag.element.removeAttribute("aria-grabbed");
			drag.element.style.zIndex = drag.zIndex;
			setOffset(drag.element, destination);
			if (placedInNewPosition && onPlaced) window.setTimeout(onPlaced, 240);
			window.setTimeout(() => drag.element.classList.remove("is-peg-settling"), 260);
			suppressedElement = drag.element;
			suppressClickUntil = window.performance.now() + 500;
		}
		function onClickCapture(event) {
			if (!suppressedElement || window.performance.now() > suppressClickUntil) return;
			const origin = event.target;
			if (origin instanceof Node && suppressedElement.contains(origin)) {
				event.preventDefault();
				event.stopPropagation();
				suppressedElement = null;
			}
		}
		function onDragStart(event) {
			const origin = event.target;
			if (origin instanceof Element && origin.closest("[data-peg-draggable]")) event.preventDefault();
		}
		function onDesktopChange() {
			if (!desktopQuery.matches) resetArrangement();
		}
		board.addEventListener("pointerdown", onPointerDown);
		board.addEventListener("pointermove", onPointerMove, { passive: false });
		board.addEventListener("pointerup", finishDrag);
		board.addEventListener("pointercancel", finishDrag);
		board.addEventListener("click", onClickCapture, true);
		board.addEventListener("dragstart", onDragStart);
		desktopQuery.addEventListener("change", onDesktopChange);
		return () => {
			board.removeEventListener("pointerdown", onPointerDown);
			board.removeEventListener("pointermove", onPointerMove);
			board.removeEventListener("pointerup", finishDrag);
			board.removeEventListener("pointercancel", finishDrag);
			board.removeEventListener("click", onClickCapture, true);
			board.removeEventListener("dragstart", onDragStart);
			desktopQuery.removeEventListener("change", onDesktopChange);
		};
	}, [
		boardRef,
		onPlaced,
		previewRef
	]);
}
//#endregion
//#region app/hooks/usePegboardShuffle.ts
var PREVIOUS_LAYOUT_KEY = "portfolio-home-layout-signature";
var DESKTOP_PROJECT_REGIONS = [
	[{
		id: "project-left-high",
		x: 3,
		y: 24
	}, {
		id: "project-left-low",
		x: 4,
		y: 57
	}],
	[{
		id: "project-center-high",
		x: 38,
		y: 4
	}, {
		id: "project-center-low",
		x: 38,
		y: 58
	}],
	[{
		id: "project-right-high",
		x: 58,
		y: 23
	}, {
		id: "project-right-low",
		x: 58,
		y: 57
	}]
];
var DESKTOP_GENERAL_SLOTS = [
	{
		id: "general-a",
		x: 3,
		y: 3
	},
	{
		id: "general-b",
		x: 22,
		y: 4
	},
	{
		id: "general-c",
		x: 39,
		y: 34
	},
	{
		id: "general-d",
		x: 60,
		y: 3
	},
	{
		id: "general-e",
		x: 74,
		y: 34
	},
	{
		id: "general-f",
		x: 73,
		y: 66
	},
	{
		id: "general-g",
		x: 3,
		y: 66
	},
	{
		id: "general-h",
		x: 22,
		y: 39
	},
	{
		id: "general-i",
		x: 41,
		y: 72
	},
	{
		id: "general-j",
		x: 61,
		y: 38
	},
	{
		id: "general-k",
		x: 76,
		y: 5
	},
	{
		id: "general-l",
		x: 24,
		y: 68
	}
];
var DESKTOP_WATERCOLOR_SLOTS = [
	{
		id: "watercolor-a",
		x: 20,
		y: 5
	},
	{
		id: "watercolor-b",
		x: 22,
		y: 39
	},
	{
		id: "watercolor-c",
		x: 22,
		y: 63
	},
	{
		id: "watercolor-d",
		x: 42,
		y: 33
	},
	{
		id: "watercolor-e",
		x: 44,
		y: 4
	},
	{
		id: "watercolor-f",
		x: 61,
		y: 35
	},
	{
		id: "watercolor-g",
		x: 72,
		y: 63
	}
];
var DESKTOP_PLANT_SLOTS = [
	{
		id: "plant-right-high",
		x: 81,
		y: 2
	},
	{
		id: "plant-right-mid",
		x: 81,
		y: 34
	},
	{
		id: "plant-right-low",
		x: 81,
		y: 65
	},
	{
		id: "plant-left-high",
		x: 1,
		y: 2
	},
	{
		id: "plant-left-low",
		x: 1,
		y: 65
	}
];
function random(seed) {
	let value = seed >>> 0;
	return () => {
		value += 1831565813;
		let result = value;
		result = Math.imul(result ^ result >>> 15, result | 1);
		result ^= result + Math.imul(result ^ result >>> 7, result | 61);
		return ((result ^ result >>> 14) >>> 0) / 4294967296;
	};
}
function shuffled(values, next) {
	const result = [...values];
	for (let index = result.length - 1; index > 0; index -= 1) {
		const target = Math.floor(next() * (index + 1));
		[result[index], result[target]] = [result[target], result[index]];
	}
	return result;
}
function overlaps(a, b, gap) {
	return !(a.right + gap <= b.left || a.left >= b.right + gap || a.bottom + gap <= b.top || a.top >= b.bottom + gap);
}
function boxFor(slot, item, boardWidth, boardHeight) {
	const anchorLeft = boardWidth * slot.x / 100;
	const anchorTop = boardHeight * slot.y / 100;
	return {
		bottom: anchorTop + item.bottomOffset,
		left: anchorLeft + item.leftOffset,
		right: anchorLeft + item.rightOffset,
		top: anchorTop + item.topOffset
	};
}
function validBox(box, placed, boardWidth, boardHeight, gap, edge = 10) {
	return box.left >= edge && box.top >= edge && box.right <= boardWidth - edge && box.bottom <= boardHeight - edge && !placed.some((other) => overlaps(box, other, gap));
}
function findAssignments(items, placed, boardWidth, boardHeight, gap, next, edge = 10) {
	const assignments = /* @__PURE__ */ new Map();
	const ordered = [...items].sort((a, b) => b.width * b.height - a.width * a.height);
	function place(index) {
		if (index === ordered.length) return true;
		const item = ordered[index];
		for (const slot of shuffled(item.slots, next)) {
			const box = boxFor(slot, item, boardWidth, boardHeight);
			if (!validBox(box, placed, boardWidth, boardHeight, gap, edge)) continue;
			placed.push(box);
			assignments.set(item.id, slot);
			if (place(index + 1)) return true;
			assignments.delete(item.id);
			placed.pop();
		}
		return false;
	}
	return place(0) ? assignments : null;
}
function compactMobileAssignments(items, boardWidth, next) {
	const edge = 14;
	const gap = 16;
	const placed = [];
	const assignments = /* @__PURE__ */ new Map();
	for (const item of items) {
		const left = edge - item.leftOffset;
		const right = boardWidth - edge - item.rightOffset;
		const center = (boardWidth - item.width) / 2 - item.leftOffset;
		const candidates = (item.id === "digital-gold" || item.id === "vyapar-plus" || item.id === "hives" ? shuffled([
			left,
			right,
			center
		], next) : shuffled([left, right], next)).map((anchorLeft) => {
			let anchorTop = edge - item.topOffset;
			for (let iteration = 0; iteration < placed.length + 2; iteration += 1) {
				const candidate = {
					bottom: anchorTop + item.bottomOffset,
					left: anchorLeft + item.leftOffset,
					right: anchorLeft + item.rightOffset,
					top: anchorTop + item.topOffset
				};
				const blockers = placed.filter((other) => overlaps(candidate, other, gap));
				if (blockers.length === 0) return {
					anchorLeft,
					anchorTop,
					box: candidate
				};
				anchorTop = Math.max(...blockers.map((blocker) => blocker.bottom)) + gap - item.topOffset;
			}
			const box = {
				bottom: anchorTop + item.bottomOffset,
				left: anchorLeft + item.leftOffset,
				right: anchorLeft + item.rightOffset,
				top: anchorTop + item.topOffset
			};
			return {
				anchorLeft,
				anchorTop,
				box
			};
		});
		const bestTop = Math.min(...candidates.map((candidate) => candidate.box.top));
		const earliest = candidates.filter((candidate) => Math.abs(candidate.box.top - bestTop) < 1);
		const selected = earliest[Math.floor(next() * earliest.length)];
		const side = Math.abs(selected.box.left - edge) < 2 ? "left" : Math.abs(selected.box.right - (boardWidth - edge)) < 2 ? "right" : "center";
		placed.push(selected.box);
		assignments.set(item.id, {
			id: `mobile-packed-${side}-${Math.round(selected.anchorTop)}`,
			x: selected.anchorLeft,
			y: selected.anchorTop
		});
	}
	return {
		assignments,
		height: Math.ceil(Math.max(...placed.map((box) => box.bottom)) + 28)
	};
}
function usePegboardShuffle(boardRef) {
	(0, import_react.useLayoutEffect)(() => {
		const board = boardRef.current;
		if (!board) return;
		const boardRect = board.getBoundingClientRect();
		const mobile = window.matchMedia("(max-width: 760px)").matches;
		const projectRegions = DESKTOP_PROJECT_REGIONS;
		const selectors = {
			"digital-gold": "[data-peg-draggable=\"digital-gold\"]",
			"vyapar-plus": "[data-peg-draggable=\"vyapar-plus\"]",
			hives: "[data-peg-draggable=\"hives\"]",
			photo: "[data-peg-draggable=\"photo\"]",
			headphones: "[data-peg-draggable=\"headphones\"]",
			watercolor: ".brushes-object",
			"progress-note": "[data-peg-draggable=\"progress-note\"]",
			resume: "[data-peg-draggable=\"resume\"]",
			contact: "[data-peg-draggable=\"contact\"]",
			linkedin: "[data-peg-draggable=\"linkedin\"]",
			archive: "[data-peg-draggable=\"archive\"]",
			plant: "[data-peg-draggable=\"plant\"]"
		};
		const elements = /* @__PURE__ */ new Map();
		for (const [id, selector] of Object.entries(selectors)) {
			const element = board.querySelector(selector);
			if (element) elements.set(id, element);
		}
		const dimensions = (id, slots) => {
			const element = elements.get(id);
			if (!element) return null;
			const rect = element.getBoundingClientRect();
			if (!mobile) return {
				bottomOffset: rect.height,
				element,
				height: rect.height,
				id,
				leftOffset: 0,
				rightOffset: rect.width,
				slots,
				topOffset: 0,
				width: rect.width
			};
			const layoutLeft = element.offsetLeft;
			const layoutTop = element.offsetTop;
			const visibleRects = [element, ...element.querySelectorAll("*")].filter((node) => {
				const style = window.getComputedStyle(node);
				return (!node.closest("details:not([open])") || node.tagName === "SUMMARY") && style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) !== 0;
			}).map((node) => node.getBoundingClientRect()).filter((visibleRect) => visibleRect.width > 0 && visibleRect.height > 0);
			const visibleLeft = Math.min(...visibleRects.map((visibleRect) => visibleRect.left)) - boardRect.left;
			const visibleTop = Math.min(...visibleRects.map((visibleRect) => visibleRect.top)) - boardRect.top;
			const visibleRight = Math.max(...visibleRects.map((visibleRect) => visibleRect.right)) - boardRect.left;
			const visibleBottom = Math.max(...visibleRects.map((visibleRect) => visibleRect.bottom)) - boardRect.top;
			return {
				bottomOffset: visibleBottom - layoutTop,
				element,
				height: visibleBottom - visibleTop,
				id,
				leftOffset: visibleLeft - layoutLeft,
				rightOffset: visibleRight - layoutLeft,
				slots,
				topOffset: visibleTop - layoutTop,
				width: visibleRight - visibleLeft
			};
		};
		const previousSignature = window.sessionStorage.getItem(PREVIOUS_LAYOUT_KEY);
		let selected = null;
		let selectedSignature = "";
		let selectedSeed = 0;
		let selectedMobileHeight = 0;
		for (let attempt = 0; attempt < 160 && !selected; attempt += 1) {
			const seedBytes = new Uint32Array(1);
			window.crypto.getRandomValues(seedBytes);
			const seed = seedBytes[0] + attempt >>> 0;
			const next = random(seed);
			const placed = [];
			const assignments = /* @__PURE__ */ new Map();
			const projectIds = shuffled([
				"digital-gold",
				"vyapar-plus",
				"hives"
			], next);
			if (mobile) {
				const secondaryIds = shuffled([
					"photo",
					"headphones",
					"watercolor",
					"plant",
					"progress-note",
					"resume",
					"contact",
					"linkedin",
					"archive"
				], next);
				const packed = compactMobileAssignments([
					...secondaryIds.slice(0, 2),
					projectIds[0],
					...secondaryIds.slice(2, 5),
					projectIds[1],
					...secondaryIds.slice(5, 7),
					projectIds[2],
					...secondaryIds.slice(7)
				].map((id) => dimensions(id, [])).filter((item) => item !== null), boardRect.width, next);
				const signature = [...packed.assignments.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, slot]) => `${id}:${Math.round(slot.x)},${Math.round(slot.y)}`).join("|");
				if (signature === previousSignature) continue;
				selected = packed.assignments;
				selectedSignature = signature;
				selectedSeed = seed;
				selectedMobileHeight = packed.height;
				break;
			}
			let projectsValid = true;
			for (let region = 0; region < projectRegions.length; region += 1) {
				const item = dimensions(projectIds[region], projectRegions[region]);
				if (!item) continue;
				const slot = shuffled(projectRegions[region], next).find((candidate) => {
					return validBox(boxFor(candidate, item, boardRect.width, boardRect.height), placed, boardRect.width, boardRect.height, mobile ? 14 : 14, mobile ? 14 : 10);
				});
				if (!slot) {
					projectsValid = false;
					break;
				}
				assignments.set(item.id, slot);
				placed.push(boxFor(slot, item, boardRect.width, boardRect.height));
			}
			if (!projectsValid) continue;
			const rest = findAssignments([
				dimensions("resume", DESKTOP_GENERAL_SLOTS),
				dimensions("contact", DESKTOP_GENERAL_SLOTS),
				dimensions("linkedin", DESKTOP_GENERAL_SLOTS),
				dimensions("plant", DESKTOP_PLANT_SLOTS),
				dimensions("photo", DESKTOP_GENERAL_SLOTS),
				dimensions("watercolor", DESKTOP_WATERCOLOR_SLOTS),
				dimensions("headphones", DESKTOP_GENERAL_SLOTS),
				dimensions("progress-note", DESKTOP_GENERAL_SLOTS),
				dimensions("archive", DESKTOP_GENERAL_SLOTS)
			].filter((item) => item !== null), placed, boardRect.width, boardRect.height, 14, next);
			if (!rest) continue;
			rest.forEach((slot, id) => assignments.set(id, slot));
			const signature = [...assignments.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([id, slot]) => `${id}:${slot.id}`).join("|");
			if (signature === previousSignature) continue;
			selected = assignments;
			selectedSignature = signature;
			selectedSeed = seed;
		}
		if (!selected) return;
		selected.forEach((slot, id) => {
			const element = elements.get(id);
			if (!element) return;
			element.style.left = mobile ? `${slot.x}px` : `${slot.x}%`;
			element.style.right = "auto";
			element.style.top = mobile ? `${slot.y}px` : `${slot.y}%`;
			element.dataset.shuffleSlot = slot.id;
		});
		if (mobile && selectedMobileHeight > 0) {
			board.style.height = `${selectedMobileHeight}px`;
			for (let pass = 0; pass < 12; pass += 1) {
				const currentBoardRect = board.getBoundingClientRect();
				const lowestVisibleEdge = Math.max(...[...elements.values()].flatMap((element) => [element, ...element.querySelectorAll("*")].filter((node) => {
					const style = window.getComputedStyle(node);
					return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) !== 0;
				}).map((node) => node.getBoundingClientRect().bottom - currentBoardRect.top)));
				const fittedHeight = Math.ceil(lowestVisibleEdge + 28);
				if (Math.abs(board.getBoundingClientRect().height - fittedHeight) < 1) break;
				board.style.height = `${fittedHeight}px`;
			}
		}
		board.dataset.layoutSeed = String(selectedSeed);
		board.dataset.shuffleReady = "true";
		window.sessionStorage.setItem(PREVIOUS_LAYOUT_KEY, selectedSignature);
	}, [boardRef]);
}
//#endregion
//#region app/components/HomeBoard.tsx
var EMAIL_ADDRESS = "vuppumeena@gmail.com";
var ARTWORK_ROTATIONS = [
	-5,
	4,
	-2
];
function clamp(value, minimum, maximum) {
	return Math.min(maximum, Math.max(minimum, value));
}
function rotatedSize(width, height, rotation, scale = 1) {
	const radians = Math.abs(rotation * Math.PI / 180);
	return {
		height: (Math.abs(height * Math.cos(radians)) + Math.abs(width * Math.sin(radians))) * scale,
		width: (Math.abs(width * Math.cos(radians)) + Math.abs(height * Math.sin(radians))) * scale
	};
}
function overlapRatio(a, b) {
	return Math.max(0, Math.min(a.x + a.width / 2, b.x + b.width / 2) - Math.max(a.x - a.width / 2, b.x - b.width / 2)) * Math.max(0, Math.min(a.y + a.height / 2, b.y + b.height / 2) - Math.max(a.y - a.height / 2, b.y - b.height / 2)) / Math.min(a.width * a.height, b.width * b.height);
}
function useSafeContextNote(open, anchorRef, noteRef, boardRef, positionRootRef = anchorRef) {
	const [position, setPosition] = (0, import_react.useState)({
		left: 0,
		top: 0
	});
	(0, import_react.useLayoutEffect)(() => {
		if (!open) return;
		const anchor = anchorRef.current;
		const note = noteRef.current;
		const board = boardRef.current;
		const positionRoot = positionRootRef.current;
		if (!anchor || !note || !board || !positionRoot) return;
		const anchorRect = anchor.getBoundingClientRect();
		const noteRect = note.getBoundingClientRect();
		const boardRect = board.getBoundingClientRect();
		const positionRootRect = positionRoot.getBoundingClientRect();
		const margin = 12;
		const gap = 10;
		const safe = {
			bottom: Math.min(boardRect.bottom, window.innerHeight) - margin,
			left: Math.max(boardRect.left, 0) + margin,
			right: Math.min(boardRect.right, window.innerWidth) - margin,
			top: Math.max(boardRect.top, 0) + margin
		};
		const candidates = [
			{
				clearance: safe.right - anchorRect.right,
				left: anchorRect.right + gap,
				top: anchorRect.top + (anchorRect.height - noteRect.height) / 2
			},
			{
				clearance: anchorRect.left - safe.left,
				left: anchorRect.left - noteRect.width - gap,
				top: anchorRect.top + (anchorRect.height - noteRect.height) / 2
			},
			{
				clearance: safe.bottom - anchorRect.bottom,
				left: anchorRect.left + (anchorRect.width - noteRect.width) / 2,
				top: anchorRect.bottom + gap
			},
			{
				clearance: anchorRect.top - safe.top,
				left: anchorRect.left + (anchorRect.width - noteRect.width) / 2,
				top: anchorRect.top - noteRect.height - gap
			}
		];
		const permanentRects = [...board.querySelectorAll(".board-object")].filter((element) => element !== anchor && !element.contains(anchor) && !anchor.contains(element)).map((element) => element.getBoundingClientRect());
		const overflow = (candidate) => Math.max(0, safe.left - candidate.left) + Math.max(0, candidate.left + noteRect.width - safe.right) + Math.max(0, safe.top - candidate.top) + Math.max(0, candidate.top + noteRect.height - safe.bottom);
		const best = candidates.map((candidate) => {
			const left = clamp(candidate.left, safe.left, Math.max(safe.left, safe.right - noteRect.width));
			const top = clamp(candidate.top, safe.top, Math.max(safe.top, safe.bottom - noteRect.height));
			const collisionArea = permanentRects.reduce((total, rect) => {
				return total + Math.max(0, Math.min(left + noteRect.width, rect.right + 6) - Math.max(left, rect.left - 6)) * Math.max(0, Math.min(top + noteRect.height, rect.bottom + 6) - Math.max(top, rect.top - 6));
			}, 0);
			return {
				...candidate,
				collisionArea,
				left,
				score: overflow(candidate) * 1e6 + collisionArea * 1e3 - candidate.clearance,
				top
			};
		}).reduce((selected, candidate) => candidate.score < selected.score ? candidate : selected);
		setPosition({
			left: best.left - positionRootRect.left,
			top: best.top - positionRootRect.top
		});
	}, [
		anchorRef,
		boardRef,
		noteRef,
		open,
		positionRootRef
	]);
	return position;
}
function MoneyPlant() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "money-plant board-object",
		"data-peg-draggable": "plant",
		"data-peg-bounds": "0.17,0.055,0.085,0.105",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "money-plant__hover",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "money-plant__pot",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					src: "/money-plant-clean.png",
					alt: "",
					width: 1254,
					height: 1254,
					unoptimized: true
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "money-plant__leaves",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "money-plant__leaf money-plant__leaf--a",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: "/money-plant-clean.png",
							alt: "",
							width: 1254,
							height: 1254,
							unoptimized: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "money-plant__leaf money-plant__leaf--b",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: "/money-plant-clean.png",
							alt: "",
							width: 1254,
							height: 1254,
							unoptimized: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "money-plant__leaf money-plant__leaf--c",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: "/money-plant-clean.png",
							alt: "",
							width: 1254,
							height: 1254,
							unoptimized: true
						})
					})
				]
			})]
		})
	});
}
function HomeBoard({ onOpenProject, projectModeActive = false }) {
	const [noteBurst, setNoteBurst] = (0, import_react.useState)(0);
	const [isMusicPlaying, setIsMusicPlaying] = (0, import_react.useState)(false);
	const [isEmailCopied, setIsEmailCopied] = (0, import_react.useState)(false);
	const [isArtworkOpen, setIsArtworkOpen] = (0, import_react.useState)(false);
	const [isArtworkPositioned, setIsArtworkPositioned] = (0, import_react.useState)(false);
	const [isArchiveNoteOpen, setIsArchiveNoteOpen] = (0, import_react.useState)(false);
	const [isMusicCreditOpen, setIsMusicCreditOpen] = (0, import_react.useState)(false);
	const [artworkPositions, setArtworkPositions] = (0, import_react.useState)([]);
	const [selectedArtwork, setSelectedArtwork] = (0, import_react.useState)(null);
	const boardRef = (0, import_react.useRef)(null);
	const archiveRef = (0, import_react.useRef)(null);
	const archiveNoteRef = (0, import_react.useRef)(null);
	const brushesRef = (0, import_react.useRef)(null);
	const brushHitareaRef = (0, import_react.useRef)(null);
	const artworkRefs = (0, import_react.useRef)([]);
	const dragPreviewRef = (0, import_react.useRef)(null);
	const audioRef = (0, import_react.useRef)(null);
	const headphonesRef = (0, import_react.useRef)(null);
	const musicCreditRef = (0, import_react.useRef)(null);
	const musicCreditNoteRef = (0, import_react.useRef)(null);
	const placementAudioRef = (0, import_react.useRef)(null);
	const fadeFrameRef = (0, import_react.useRef)(null);
	const emailFeedbackTimerRef = (0, import_react.useRef)(null);
	const musicPlayingRef = (0, import_react.useRef)(false);
	usePegboardDrag(boardRef, dragPreviewRef, (0, import_react.useCallback)(() => {
		const audio = placementAudioRef.current;
		if (!audio) return;
		audio.pause();
		audio.currentTime = 0;
		audio.muted = false;
		audio.volume = .32;
		audio.play().catch(() => void 0);
	}, []));
	usePegboardShuffle(boardRef);
	const archiveNotePosition = useSafeContextNote(isArchiveNoteOpen, archiveRef, archiveNoteRef, boardRef);
	const musicCreditPosition = useSafeContextNote(isMusicCreditOpen, headphonesRef, musicCreditNoteRef, boardRef, musicCreditRef);
	async function copyEmailAddress() {
		try {
			await navigator.clipboard.writeText(EMAIL_ADDRESS);
		} catch {
			const copyField = document.createElement("textarea");
			copyField.value = EMAIL_ADDRESS;
			copyField.setAttribute("readonly", "");
			copyField.style.position = "fixed";
			copyField.style.opacity = "0";
			document.body.append(copyField);
			copyField.select();
			document.execCommand("copy");
			copyField.remove();
		}
		if ("vibrate" in navigator) navigator.vibrate(24);
		setIsEmailCopied(true);
		if (emailFeedbackTimerRef.current !== null) window.clearTimeout(emailFeedbackTimerRef.current);
		emailFeedbackTimerRef.current = window.setTimeout(() => {
			setIsEmailCopied(false);
			emailFeedbackTimerRef.current = null;
		}, 1800);
	}
	function stopAudioFade() {
		if (fadeFrameRef.current !== null) {
			window.cancelAnimationFrame(fadeFrameRef.current);
			fadeFrameRef.current = null;
		}
	}
	function fadeAudio(audio, targetVolume, duration, onComplete) {
		stopAudioFade();
		const startVolume = audio.volume;
		const startedAt = window.performance.now();
		function tick(now) {
			const progress = Math.min(1, (now - startedAt) / duration);
			const eased = 1 - (1 - progress) ** 3;
			audio.volume = startVolume + (targetVolume - startVolume) * eased;
			if (progress < 1) fadeFrameRef.current = window.requestAnimationFrame(tick);
			else {
				fadeFrameRef.current = null;
				onComplete?.();
			}
		}
		fadeFrameRef.current = window.requestAnimationFrame(tick);
	}
	async function toggleMusic() {
		const audio = audioRef.current;
		if (!audio) return;
		setIsMusicCreditOpen(true);
		if (musicPlayingRef.current) {
			musicPlayingRef.current = false;
			setIsMusicPlaying(false);
			fadeAudio(audio, 0, 1e3, () => audio.pause());
			return;
		}
		musicPlayingRef.current = true;
		setIsMusicPlaying(true);
		if (audio.paused) audio.volume = 0;
		try {
			await audio.play();
			setNoteBurst((burst) => burst + 1);
			fadeAudio(audio, .12, 1300);
		} catch {
			musicPlayingRef.current = false;
			setIsMusicPlaying(false);
		}
	}
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		return () => {
			stopAudioFade();
			if (emailFeedbackTimerRef.current !== null) window.clearTimeout(emailFeedbackTimerRef.current);
			audio?.pause();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isArtworkOpen) return;
		function closeFromOutside(event) {
			const target = event.target;
			if (target instanceof Node && brushesRef.current?.contains(target)) return;
			event.preventDefault();
			event.stopPropagation();
			setIsArtworkOpen(false);
			setIsArtworkPositioned(false);
			setSelectedArtwork(null);
		}
		function closeFromEscape(event) {
			if (event.key !== "Escape") return;
			setIsArtworkOpen(false);
			setIsArtworkPositioned(false);
			setSelectedArtwork(null);
		}
		document.addEventListener("click", closeFromOutside, true);
		document.addEventListener("keydown", closeFromEscape);
		return () => {
			document.removeEventListener("click", closeFromOutside, true);
			document.removeEventListener("keydown", closeFromEscape);
		};
	}, [isArtworkOpen]);
	(0, import_react.useEffect)(() => {
		if (!isArchiveNoteOpen && !isMusicCreditOpen) return;
		function closeContextNotes(event) {
			const target = event.target;
			if (!(target instanceof Node)) return;
			if (archiveRef.current?.contains(target) || musicCreditRef.current?.contains(target)) return;
			setIsArchiveNoteOpen(false);
			setIsMusicCreditOpen(false);
		}
		document.addEventListener("pointerdown", closeContextNotes, true);
		return () => document.removeEventListener("pointerdown", closeContextNotes, true);
	}, [isArchiveNoteOpen, isMusicCreditOpen]);
	(0, import_react.useLayoutEffect)(() => {
		if (!isArtworkOpen) return;
		const board = boardRef.current;
		const holder = brushesRef.current;
		const hitarea = brushHitareaRef.current;
		const artworks = artworkRefs.current;
		if (!board || !holder || !hitarea || artworks.some((artwork) => !artwork)) return;
		const boardRect = board.getBoundingClientRect();
		const hitareaRect = hitarea.getBoundingClientRect();
		const safeMargin = window.matchMedia("(max-width: 760px)").matches ? 12 : 22;
		const safe = {
			bottom: Math.min(boardRect.bottom, window.innerHeight) - safeMargin,
			left: Math.max(boardRect.left, 0) + safeMargin,
			right: Math.min(boardRect.right, window.innerWidth) - safeMargin,
			top: Math.max(boardRect.top, 0) + safeMargin
		};
		const origin = {
			x: hitareaRect.left + hitareaRect.width / 2,
			y: hitareaRect.top + hitareaRect.height / 2
		};
		const sizes = artworks.map((artwork, index) => {
			const width = artwork?.offsetWidth ?? 0;
			const height = artwork?.offsetHeight ?? 0;
			return {
				...rotatedSize(width, height, ARTWORK_ROTATIONS[index]),
				height,
				width
			};
		});
		const available = {
			down: safe.bottom - origin.y,
			left: origin.x - safe.left,
			right: safe.right - origin.x,
			up: origin.y - safe.top
		};
		const horizontalBias = available.right - available.left;
		const verticalBias = available.down - available.up;
		const baseAngle = Math.atan2(verticalBias, horizontalBias || .001);
		const angleSpreads = [
			[
				-1.05,
				0,
				1.05
			],
			[
				-1.25,
				-.2,
				.9
			],
			[
				-.9,
				.2,
				1.25
			],
			[
				-1.45,
				-.45,
				.55
			],
			[
				-.55,
				.45,
				1.45
			]
		];
		let best = null;
		for (const spread of angleSpreads) for (const radiusScale of [
			.92,
			1.06,
			1.2,
			1.34
		]) {
			const positions = sizes.map((size, index) => {
				const radius = (Math.max(size.width, size.height) + Math.max(hitareaRect.width, hitareaRect.height) * .34) * radiusScale;
				const angle = baseAngle + spread[index];
				const proposedX = origin.x + Math.cos(angle) * radius;
				const proposedY = origin.y + Math.sin(angle) * radius;
				return {
					x: clamp(proposedX, safe.left + size.width / 2, safe.right - size.width / 2),
					y: clamp(proposedY, safe.top + size.height / 2, safe.bottom - size.height / 2)
				};
			});
			const boxes = positions.map((position, index) => ({
				...position,
				width: sizes[index].width,
				height: sizes[index].height
			}));
			const overlap = overlapRatio(boxes[0], boxes[1]) + overlapRatio(boxes[0], boxes[2]) + overlapRatio(boxes[1], boxes[2]);
			const holderBox = {
				x: origin.x,
				y: origin.y,
				width: hitareaRect.width,
				height: hitareaRect.height
			};
			const holderOverlap = boxes.reduce((total, box) => total + overlapRatio(box, holderBox), 0);
			const clampDistance = positions.reduce((total, position, index) => {
				const radius = (Math.max(sizes[index].width, sizes[index].height) + Math.max(hitareaRect.width, hitareaRect.height) * .34) * radiusScale;
				const angle = baseAngle + spread[index];
				return total + Math.hypot(position.x - (origin.x + Math.cos(angle) * radius), position.y - (origin.y + Math.sin(angle) * radius));
			}, 0);
			const score = overlap * 12e3 + holderOverlap * 6e3 + clampDistance * 4 + radiusScale * 20;
			if (!best || score < best.score) best = {
				positions,
				score
			};
		}
		setArtworkPositions((best?.positions ?? []).map((position, index) => {
			const selectedSize = rotatedSize(sizes[index].width, sizes[index].height, 0, 1.52);
			const selectedX = clamp(position.x, safe.left + selectedSize.width / 2, safe.right - selectedSize.width / 2);
			const selectedY = clamp(position.y, safe.top + selectedSize.height / 2, safe.bottom - selectedSize.height / 2);
			return {
				selectedX: selectedX - origin.x,
				selectedY: selectedY - origin.y,
				x: position.x - origin.x,
				y: position.y - origin.y
			};
		}));
		setIsArtworkPositioned(true);
	}, [isArtworkOpen]);
	function toggleArtwork() {
		setIsArtworkPositioned(false);
		setIsArtworkOpen((isOpen) => {
			if (isOpen) setSelectedArtwork(null);
			return !isOpen;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "fixed-landing",
		inert: projectModeActive,
		"aria-hidden": projectModeActive,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: boardRef,
			className: isArtworkOpen ? "fixed-board is-artwork-open" : "fixed-board",
			"aria-label": "Meena Vuppu portfolio pegboard",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFile, {
					project: projects[0],
					className: "board-object p1",
					onOpenProject,
					pegboardDragId: "digital-gold"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "photo-object board-object",
					"data-peg-draggable": "photo",
					href: "https://www.linkedin.com/posts/meena-vuppu_friendsoffigma-configwatchparty-config2025-activity-7327375191125172224-LsLU?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnGjGoBggAAG-XnFBamgY1cN6IJn76lm10",
					target: "_blank",
					rel: "noopener noreferrer",
					draggable: false,
					"aria-label": "Meena Vuppu at Figma Config 2025",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, { className: "pin--one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, { className: "pin--two" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: "/meena-photo.jpeg",
							alt: "Meena Vuppu",
							width: 500,
							height: 380,
							priority: true,
							unoptimized: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "photo-caption",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Figma Config Bengaluru" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: headphonesRef,
					className: `headphones-object board-object ${isMusicPlaying ? "is-playing" : ""}${isMusicCreditOpen ? " is-context-open" : ""}`,
					"data-peg-draggable": "headphones",
					onPointerLeave: (event) => {
						if (event.pointerType === "mouse") setIsMusicCreditOpen(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "headphones-button",
							onClick: toggleMusic,
							"aria-label": isMusicPlaying ? "Pause background music" : "Play background music",
							"aria-pressed": isMusicPlaying,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoardHook, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								className: "airpods-image",
								src: "/airpods-max-lavender.png",
								alt: "Lavender AirPods Max",
								width: 2892,
								height: 2960,
								unoptimized: true
							})]
						}),
						noteBurst > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "music-notes",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "♪" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "♫" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "♪" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "♬" })
							]
						}, noteBurst) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: musicCreditRef,
							className: isMusicCreditOpen ? "music-credit is-open" : "music-credit",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "music-credit__trigger",
								"aria-label": "Music credit",
								"aria-expanded": isMusicCreditOpen,
								onClick: () => setIsMusicCreditOpen((open) => !open),
								children: "♪"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								ref: musicCreditNoteRef,
								className: "music-credit__popover",
								style: {
									left: musicCreditPosition.left,
									top: musicCreditPosition.top
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Lemonade — Sakura Girl" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://creativecommons.org/licenses/by/3.0/",
											target: "_blank",
											rel: "noreferrer",
											children: "CC BY 3.0"
										}),
										" · Music via ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://links.al/youtube",
											target: "_blank",
											rel: "noreferrer",
											children: "Audio Library"
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://soundcloud.com/sakuragirl_official",
											target: "_blank",
											rel: "noreferrer",
											children: "Sakura Girl"
										}),
										" · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://links.al/M09",
											target: "_blank",
											rel: "noreferrer",
											children: "Free download"
										})
									] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
							ref: audioRef,
							src: "/lemonade-by-sakura-girl.mp3",
							loop: true,
							preload: "none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
							ref: placementAudioRef,
							src: "/on-pin.mp3",
							preload: "auto",
							"aria-hidden": "true"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFile, {
					project: projects[1],
					className: "board-object p2",
					onOpenProject,
					pegboardDragId: "vyapar-plus"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "resume-object board-object",
					"data-peg-draggable": "resume",
					href: "#",
					target: "_blank",
					rel: "noopener noreferrer",
					draggable: false,
					"aria-label": "Resume placeholder",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Resume" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "view PDF" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "contact-note board-object",
					"data-peg-draggable": "contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: isEmailCopied ? "contact-note__action is-copied" : "contact-note__action",
						type: "button",
						draggable: false,
						onDragStart: (event) => event.preventDefault(),
						onClick: copyEmailAddress,
						"aria-label": "Copy vuppumeena@gmail.com to clipboard",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							"aria-live": "polite",
							children: isEmailCopied ? "Email copied!" : "Let’s talk work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: EMAIL_ADDRESS })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "linkedin-note board-object",
					"data-peg-draggable": "linkedin",
					href: "https://www.linkedin.com/in/meena-vuppu",
					target: "_blank",
					rel: "noopener noreferrer",
					draggable: false,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Connect on LinkedIn" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFile, {
					project: projects[2],
					className: "board-object p3",
					onOpenProject,
					pegboardDragId: "hives"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: brushesRef,
					className: `${isArtworkOpen ? "brushes-object board-object is-open" : "brushes-object board-object"}${isArtworkPositioned ? " is-positioned" : ""}`,
					"data-peg-draggable": isArtworkOpen ? void 0 : "watercolor",
					"data-peg-bounds": "0.19,0.15,0.19,0.16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "brush-holder",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "brush-holder__hover",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								className: "brush-holder__image",
								src: "/ceramic-watercolor-holder-clean.png",
								alt: "Watercolor brushes in a handmade ceramic holder",
								width: 1024,
								height: 1536,
								unoptimized: true
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: brushHitareaRef,
							className: "brush-holder__hitarea",
							type: "button",
							onClick: toggleArtwork,
							"aria-label": isArtworkOpen ? "Hide watercolor artwork" : "Reveal watercolor artwork",
							"aria-expanded": isArtworkOpen
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "watercolor-artworks",
						role: "group",
						"aria-label": "Watercolor artwork previews",
						"aria-hidden": !isArtworkOpen,
						children: [
							0,
							1,
							2
						].map((artwork) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `watercolor-artwork watercolor-artwork--${artwork + 1}${selectedArtwork === artwork ? " is-selected" : ""}`,
							type: "button",
							tabIndex: isArtworkOpen ? 0 : -1,
							"aria-label": `Inspect artwork placeholder ${artwork + 1}`,
							"aria-pressed": selectedArtwork === artwork,
							onClick: () => setSelectedArtwork(artwork),
							ref: (element) => {
								artworkRefs.current[artwork] = element;
							},
							style: {
								"--art-rotation": `${ARTWORK_ROTATIONS[artwork]}deg`,
								"--art-selected-x": `${artworkPositions[artwork]?.selectedX ?? 0}px`,
								"--art-selected-y": `${artworkPositions[artwork]?.selectedY ?? 0}px`,
								"--art-x": `${artworkPositions[artwork]?.x ?? 0}px`,
								"--art-y": `${artworkPositions[artwork]?.y ?? 0}px`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "watercolor-artwork__surface",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
								]
							})
						}, artwork))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: archiveRef,
					className: isArchiveNoteOpen ? "archive-object board-object is-context-open" : "archive-object board-object",
					"data-peg-draggable": "archive",
					role: "button",
					tabIndex: 0,
					"aria-expanded": isArchiveNoteOpen,
					onClick: () => setIsArchiveNoteOpen(true),
					onKeyDown: (event) => {
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							setIsArchiveNoteOpen(true);
						}
					},
					onPointerLeave: (event) => {
						if (event.pointerType === "mouse") setIsArchiveNoteOpen(false);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Archive" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "More work" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: archiveNoteRef,
							className: isArchiveNoteOpen ? "archive-context-note is-open" : "archive-context-note",
							style: {
								left: archiveNotePosition.left,
								top: archiveNotePosition.top
							},
							role: "status",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Still shaping these." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Drafts, experiments & case studies coming up." })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "progress-note board-object",
					"data-peg-draggable": "progress-note",
					role: "note",
					"aria-label": "In progress: Make digital journeys feel simpler.",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "In progress" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "progress-note__task",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "aria-hidden": "true" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Make digital journeys",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"feel simpler."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "progress-note__doodle",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyPlant, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: dragPreviewRef,
					className: "peg-drag-preview",
					"aria-hidden": "true"
				})
			]
		})
	});
}
//#endregion
//#region app/components/PortfolioTitleHeader.tsx
function PortfolioTitleHeader({ title, compactTitle, compact, onHome, projectMode = false }) {
	const [autoCompact, setAutoCompact] = (0, import_react.useState)(false);
	const headerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (compact !== void 0) return;
		let frame = 0;
		const mobileHome = window.matchMedia("(max-width: 760px)");
		function updateCompactState() {
			if (frame) return;
			frame = window.requestAnimationFrame(() => {
				frame = 0;
				const scrollY = window.scrollY;
				if (!projectMode && mobileHome.matches) {
					const progress = Math.min(1, Math.max(0, scrollY / 126));
					const compactTitleVisible = progress >= .9;
					const fullOpacity = compactTitleVisible ? 0 : 1;
					const compactOpacity = compactTitleVisible ? 1 : 0;
					const header = headerRef.current;
					header?.style.setProperty("--mobile-header-height", `${184 - progress * 112}px`);
					header?.style.setProperty("--mobile-header-brand-y", `${progress * 3}px`);
					header?.style.setProperty("--mobile-header-brand-size", `${14 - progress}px`);
					header?.style.setProperty("--mobile-header-brand-line-height", `${21 - progress * 1.5}px`);
					header?.style.setProperty("--mobile-header-title-top", `${73 - progress * 50}px`);
					header?.style.setProperty("--mobile-header-title-scale", `${1 - progress * .58}`);
					header?.style.setProperty("--mobile-header-full-opacity", `${fullOpacity}`);
					header?.style.setProperty("--mobile-header-compact-opacity", `${compactOpacity}`);
					setAutoCompact(false);
					return;
				}
				headerRef.current?.style.removeProperty("--mobile-header-height");
				headerRef.current?.style.removeProperty("--mobile-header-brand-y");
				headerRef.current?.style.removeProperty("--mobile-header-brand-size");
				headerRef.current?.style.removeProperty("--mobile-header-brand-line-height");
				headerRef.current?.style.removeProperty("--mobile-header-title-top");
				headerRef.current?.style.removeProperty("--mobile-header-title-scale");
				headerRef.current?.style.removeProperty("--mobile-header-full-opacity");
				headerRef.current?.style.removeProperty("--mobile-header-compact-opacity");
				setAutoCompact((isCompact) => {
					if (!isCompact && scrollY > 140) return true;
					if (isCompact && scrollY < 70) return false;
					return isCompact;
				});
			});
		}
		updateCompactState();
		window.addEventListener("scroll", updateCompactState, { passive: true });
		document.addEventListener("scroll", updateCompactState, { passive: true });
		window.addEventListener("resize", updateCompactState, { passive: true });
		return () => {
			window.removeEventListener("scroll", updateCompactState);
			document.removeEventListener("scroll", updateCompactState);
			window.removeEventListener("resize", updateCompactState);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, [compact, projectMode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		ref: headerRef,
		className: `portfolio-title-header ${compact ?? autoCompact ? "is-compact" : ""} ${projectMode ? "is-project-title" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "portfolio-title-header__inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "portfolio-title-header__brand",
				children: projectMode && onHome ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onHome,
					children: "← Board"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					href: "/",
					children: "Meena Vuppu"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "portfolio-title-header__full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "portfolio-title-header__current",
					children: title
				}, title)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "portfolio-title-header__compact",
				children: compactTitle
			})] })]
		})
	});
}
//#endregion
//#region app/components/ProjectMode.tsx
function ProjectMode({ project, otherProjects, phase, onSwitchProject }) {
	const pegboardTheme = {
		"--project-pegboard": project.pegboardTheme.board,
		"--project-pegboard-hole": project.pegboardTheme.holes
	};
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "auto"
		});
		const revealItems = Array.from(document.querySelectorAll(".project-mode .project-reveal"));
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
			revealItems.forEach((item) => item.setAttribute("data-revealed", "true"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.setAttribute("data-revealed", "true");
				observer.unobserve(entry.target);
			});
		}, {
			rootMargin: "0px 0px -7%",
			threshold: .08
		});
		revealItems.forEach((item) => observer.observe(item));
		return () => observer.disconnect();
	}, [project.slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: `project-mode project-mode--${phase}`,
		"aria-label": `${project.title} project`,
		"aria-live": "polite",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `project-view project-view--${project.slug}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "project-pegboard",
				style: pegboardTheme,
				"aria-label": `${project.title} case study board`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-board-intro project-reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "project-board-label",
								children: "Project snapshot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "project-board-meta",
								children: project.metadata.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "project-board-stats",
								children: project.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: stat.isForecast ? "is-forecast" : "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stat.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: stat.label })]
								}, stat.label))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "project-board-row project-board-row--opportunity project-reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-paper project-paper--copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperClip, { className: "project-paper__clip" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: "01 — Opportunity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.opportunity.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.opportunity.body })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-screen project-screen--pinned",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Major product visual placeholder" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Visual 01 · Opportunity" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "project-board-row project-board-row--matter project-reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "project-sticky-note",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PegPin, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02 — Why it matters" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.metric }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: project.metricLabel })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-paper project-paper--wide",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.problem.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.problem.body })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "project-decisions project-reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-decisions__heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: "03 — Product decisions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The decisions that shaped the product." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "project-decision-stack",
							children: project.decisions.map((decision, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "project-decision-sheet",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: decision.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: decision.body })
								]
							}, decision.title))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "project-experience project-reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "project-paper project-paper--experience",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "section-kicker",
									children: "04 — Experience"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.solution.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.solution.body })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "project-screen project-screen--wide",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperClip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Major product visual placeholder" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Visual 02 · Final experience" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "project-impact project-reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "section-kicker",
								children: "05 — Impact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.impact.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.impact.body }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: project.metric }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: project.metricLabel })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "project-elsewhere project-reveal",
						"aria-label": "Other projects",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "The Good Stuff Continues..." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "project-elsewhere__files",
							children: otherProjects.map((otherProject) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectFile, {
								project: otherProject,
								className: "project-elsewhere__file",
								compact: true,
								onOpenProject: onSwitchProject
							}, otherProject.slug))
						})]
					})
				]
			})
		})
	});
}
//#endregion
//#region app/components/PortfolioExperience.tsx
var HOME_HEADLINE = "Design is chasing a feeling";
function projectFromPathname(pathname) {
	const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
	return match ? getProject(match[1]) ?? null : null;
}
function PortfolioExperience({ initialProject = null }) {
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(initialProject);
	const [phase, setPhase] = (0, import_react.useState)(initialProject ? "open" : "closing");
	const boardScrollY = (0, import_react.useRef)(0);
	const transitionTimer = (0, import_react.useRef)(null);
	const closingFromControl = (0, import_react.useRef)(false);
	const lastProjectTrigger = (0, import_react.useRef)(null);
	function clearTransitionTimer() {
		if (transitionTimer.current !== null) {
			window.clearTimeout(transitionTimer.current);
			transitionTimer.current = null;
		}
	}
	function finishOnBoard() {
		setSelectedProject(null);
		setPhase("closing");
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				window.scrollTo({
					top: boardScrollY.current,
					behavior: "auto"
				});
				lastProjectTrigger.current?.focus({ preventScroll: true });
			});
		});
	}
	(0, import_react.useEffect)(() => {
		history.replaceState({
			portfolio: true,
			project: initialProject?.slug ?? null,
			fromBoard: false
		}, "", window.location.href);
		function handlePopState() {
			clearTransitionTimer();
			const project = projectFromPathname(window.location.pathname);
			if (!project) {
				if (closingFromControl.current) {
					closingFromControl.current = false;
					finishOnBoard();
					return;
				}
				setPhase("closing");
				transitionTimer.current = window.setTimeout(finishOnBoard, 320);
				return;
			}
			setSelectedProject(project);
			setPhase("opening");
			transitionTimer.current = window.setTimeout(() => setPhase("open"), 420);
		}
		window.addEventListener("popstate", handlePopState);
		return () => {
			clearTransitionTimer();
			window.removeEventListener("popstate", handlePopState);
		};
	}, [initialProject]);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("portfolio-project-active", selectedProject !== null);
		return () => document.body.classList.remove("portfolio-project-active");
	}, [selectedProject]);
	function openProject(project, trigger) {
		clearTransitionTimer();
		lastProjectTrigger.current = trigger;
		boardScrollY.current = window.scrollY;
		history.pushState({
			portfolio: true,
			project: project.slug,
			fromBoard: true
		}, "", `/projects/${project.slug}`);
		setSelectedProject(project);
		setPhase("opening");
		transitionTimer.current = window.setTimeout(() => setPhase("open"), 440);
	}
	function closeProject() {
		if (!selectedProject || phase === "closing") return;
		clearTransitionTimer();
		setPhase("closing");
		transitionTimer.current = window.setTimeout(() => {
			if (history.state?.fromBoard) {
				closingFromControl.current = true;
				history.back();
			} else {
				history.replaceState({
					portfolio: true,
					project: null,
					fromBoard: false
				}, "", "/");
				finishOnBoard();
			}
		}, 340);
	}
	function switchProject(project) {
		if (!selectedProject || selectedProject.slug === project.slug) return;
		clearTransitionTimer();
		setPhase("switching");
		transitionTimer.current = window.setTimeout(() => {
			history.replaceState({
				...history.state,
				portfolio: true,
				project: project.slug
			}, "", `/projects/${project.slug}`);
			setSelectedProject(project);
			setPhase("opening");
			transitionTimer.current = window.setTimeout(() => setPhase("open"), 360);
		}, 180);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `portfolio-experience ${selectedProject ? "is-project-mode" : "is-board-mode"} project-phase-${phase}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioTitleHeader, {
			title: selectedProject && phase !== "closing" ? selectedProject.headline : HOME_HEADLINE,
			compactTitle: selectedProject && phase !== "closing" ? selectedProject.headline : HOME_HEADLINE,
			onHome: selectedProject ? closeProject : void 0,
			projectMode: selectedProject !== null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "portfolio-state-stage",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeBoard, {
				onOpenProject: openProject,
				projectModeActive: selectedProject !== null
			}), selectedProject ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMode, {
				project: selectedProject,
				otherProjects: getOtherProjects(selectedProject.slug),
				phase,
				onSwitchProject: switchProject
			}) : null]
		})]
	});
}
//#endregion
export { PortfolioExperience };
