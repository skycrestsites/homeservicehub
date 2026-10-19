/* Cleaning Business course. Quick guides are free; detailed guides are for members.
   Add a video by setting `video` to an embed URL (YouTube, Vimeo, Loom). */
(function () {
  const T = (head, rows) =>
    `<div class="table"><table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("")}</tbody></table></div>`;
  const C = (title, text, icon = "lightbulb") =>
    `<div class="callout"><span data-i="${icon}"></span><div><b>${title}</b> ${text}</div></div>`;
  const W = (title, text) => C(title, text, "alert").replace('class="callout"', 'class="callout warn"');
  const UL = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  const OL = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;

  window.COURSE = {
    id: "cleaning",
    title: "Cleaning Business",
    categories: [
      {
        title: "Foundations",
        desc: "The plan, the niche, the legal setup, banking and your name.",
        lessons: [
          {
            slug: "course-overview",
            num: "01",
            title: "Course Overview",
            sub: "The timeline, the money and the roadmap",
            mins: 4,
            video: "",
            detail: ["Full video walkthrough of the first 12 months", "Startup budget spreadsheet for USA and Canada", "Monthly milestone checklist"],
            body: `
<p>This is a practical walkthrough for building a real cleaning company. Everything is in order and each step depends on the one before it. Do not skip ahead.</p>
<h3>The honest timeline</h3>
${T(["Year", "What it looks like"], [
  ["Year 1", "Building. You lose money on some jobs and burn ad spend learning. Normal."],
  ["Year 2", "Stabilising. Repeat clients stack up and profit starts to stick."],
  ["Year 3+", "Scaling. Recurring contracts, Airbnb networks, commercial work."],
])}
<p>Most quitting happens between months 3 and 9. Knowing that going in is most of the battle.</p>
<h3>What you need to start</h3>
${T(["Category", "USA (USD)", "Canada (CAD)"], [
  ["Registration, one-time", "$100 to $500", "$200 to $400"],
  ["Insurance, monthly", "$45 to $100", "$60 to $120"],
  ["Website, monthly", "$20 to $80", "$25 to $100"],
  ["Supplies, one-time", "$300 to $800", "$400 to $1,000"],
  ["Ad spend, monthly", "$800 to $1,500", "$1,000 to $2,000"],
  ["Buffer, monthly", "$400 to $1,000", "$500 to $1,200"],
])}
<p>You do not need all of it on day one. You need roughly <strong>$1,000 a month</strong> available for the first three to four months. Going in underfunded is the fastest way to quit on something that was about to work.</p>
<h3>Where the money goes early</h3>
${UL(["40 to 50% on paid ads.", "25 to 35% on paying cleaners, less if you do the jobs yourself.", "10 to 15% on software, insurance, hosting and registration.", "The rest on supplies, fuel and the things you did not plan for."])}
${C("The commitment.", "Set a two to three year horizon. Revenue looks good and profit looks small at the start. Recurring clients are what fix that, and they take months to stack up.", "target")}`,
          },
          {
            slug: "choosing-your-niche",
            num: "02",
            title: "Choosing Your Niche",
            sub: "What you clean, and what you say no to",
            mins: 4,
            video: "",
            detail: ["Video breakdown of each residential service", "Local demand research worksheet", "Service menu template you can copy"],
            body: `
<p>Pick a focused service menu rather than trying to be everything. A narrow menu is easier to price, easier to train and easier to sell.</p>
<h3>The four questions</h3>
${OL(["Can you get equipped for under $2,000?", "Can you charge $150 or more per job?", "Is recurring work built into it?", "Can you do the first 20 jobs yourself?"])}
<p>If a niche fails two or more of these, it is not your first business. Pick one and do not switch for six months no matter what you see online.</p>
<h3>Core residential services</h3>
${T(["Service", "What it is", "Recurring?"], [
  ["Standard clean", "Weekly, biweekly or monthly maintenance", "Yes, the backbone"],
  ["Deep clean", "Top to bottom reset, baseboards, inside appliances", "No, but leads to recurring"],
  ["Move-in and move-out", "Empty home, every surface, inside everything", "No, steady from agents"],
  ["Post-construction", "Drywall dust, paint splatter, sticker residue", "No, high value"],
  ["Airbnb turnover", "Timed, checklist driven, fast", "Yes, high frequency"],
])}
<h3>Specialty add-ons, higher margin</h3>
${UL(["Carpet steam cleaning, $40 to $80 per room.", "Upholstery and couch steam cleaning, $80 to $150 per piece.", "Mattress sanitisation.", "Tile and grout deep cleaning.", "Interior and low exterior window cleaning.", "Oven and range deep clean as a standalone, $60 to $120."])}
<h3>Commercial, once you are reliable</h3>
${UL(["Offices, usually evenings, recurring.", "Retail and storefronts.", "Medical and dental, which require disinfection protocols.", "Condo and apartment common areas.", "Construction final cleans for builders."])}
${C("Where most people land.", "Residential standard and deep cleans to start, then move-outs and Airbnb turnovers, then specialty work once you are equipped.")}`,
          },
          {
            slug: "legal-setup-usa",
            num: "03",
            title: "Legal Setup: USA",
            sub: "LLC, EIN, licence, insurance",
            mins: 3,
            video: "",
            detail: ["Screen-by-screen LLC and EIN filing walkthrough", "Insurance quote comparison checklist", "Business Foundations folder template"],
            body: `
<p>Complete this in one weekend. Expect <strong>$250 to $800</strong> depending on your state.</p>
<h3>The six steps, in order</h3>
${OL(["Register your LLC through your state, or a service like Northwest Registered Agent.", "Get your EIN at irs.gov. It is free and takes ten minutes. Never pay a service for this.", "Get your city or county business licence, usually $25 to $150 a year.", "Get general liability insurance, $1M per occurrence and $2M aggregate.", "Get commercial auto if you drive for work. Personal auto will not cover you.", "Save every document to one Business Foundations folder."])}
<h3>State filing fees, common states</h3>
${T(["State", "Filing fee", "Annual fee"], [["Texas", "$300", "$0"], ["Florida", "$125", "$138.75"], ["California", "$70", "$800"], ["New York", "$200", "$9"], ["Georgia", "$100", "$50"]])}
<h3>What your policy needs</h3>
${UL(["General liability, minimum $1M per occurrence and $2M aggregate.", "Care, custody and control, which covers damage to client property in your care.", "Tools and equipment cover.", "Commercial auto if the vehicle is mainly for the business."])}
${W("Do not skip insurance.", "The day you walk into someone's home with equipment, you accept the possibility of breaking something or a client slipping. Without cover, one event can end the business. You also need proof of insurance to apply for Google Local Service Ads later.")}`,
          },
          {
            slug: "legal-setup-canada",
            num: "04",
            title: "Legal Setup: Canada",
            sub: "Registration, CRA, insurance, WSIB",
            mins: 3,
            video: "",
            detail: ["Ownr registration walkthrough, step by step", "Sole proprietor vs corporation decision guide", "GST and HST registration walkthrough"],
            body: `
<p>Ownr (ownr.co) is the smoothest route. They handle the name search and the filings. There is a long-running deal where opening an RBC business account during the process drops the cost to roughly $200 to $300. Check the current terms yourself.</p>
<h3>Before you start</h3>
${UL(["Have your business name confirmed, with the .com and social handles free.", "Decide your structure: sole proprietorship or corporation.", "Have your address, SIN and photo ID to hand."])}
<h3>Sole proprietor or corporation</h3>
${T(["", "Sole proprietorship", "Corporation"], [["Cost", "Lower", "Higher"], ["Setup", "Simple", "More paperwork"], ["Liability", "Personal", "Separated"], ["Start here if", "You are testing the business", "Revenue justifies it"]])}
<h3>The process</h3>
${OL(["Create an Ownr account and pick your province.", "Choose your structure and enter your proposed name. Ownr runs the availability search.", "Enter your address and a plain description such as Residential and commercial cleaning services.", "Pay and wait a few business days. Read every email it sends you, because missing one pauses the filing.", "Get your Master Business Licence and your Business Number for CRA."])}
<h3>Insurance and WSIB</h3>
${UL(["Zensurance is the straightforward option. Expect $60 to $80 a month to start.", "Commercial general liability, minimum $2M.", "Care, custody and control for client property.", "WSIB or WCB coverage once you have staff. Most commercial contracts require it."])}
${C("GST and HST.", "You only need to register once you cross $30,000 in revenue over four rolling quarters. You can register earlier to claim input tax credits on supplies and ad spend. Most growing cleaning businesses register early because the credits add up.")}`,
          },
          {
            slug: "banking-and-bookkeeping",
            num: "05",
            title: "Banking and Bookkeeping",
            sub: "Accounts, cards, tax",
            mins: 3,
            video: "",
            detail: ["Setting up automatic tax transfers on video", "Bookkeeping spreadsheet template", "Connecting Crewty payments to your books"],
            body: `
<p>One rule above everything else: <strong>never mix business money with personal money.</strong> Not once, not for $5.</p>
<h3>Business banks (USA)</h3>
${T(["Bank", "Type", "Best for"], [["Novo", "Online", "Free, good mobile app"], ["Mercury", "Online", "Clean dashboard"], ["Relay", "Online", "Multi-user access and sub-accounts"], ["Chase Business Complete", "Traditional", "If you deposit cash often"]])}
<h3>Business banks (Canada)</h3>
${T(["Bank", "Type", "Best for"], [["RBC Digital Choice", "Traditional", "Integrates with Ownr"], ["TD Business Unlimited", "Traditional", "Wide branch network"], ["Vault", "Online", "Free for solo operators"], ["Local credit union", "Traditional", "Often the lowest fees"]])}
<h3>The tax habit</h3>
<p>Transfer 25 to 30% of every payment into a separate savings account. Automate it weekly on a Friday and never touch it. In twelve months you have a full tax fund without ever thinking about it. Confirm the percentage with an accountant.</p>
<h3>Bookkeeping by stage</h3>
${UL(["Under $3K a month: a Google Sheet is fine.", "$3K to $10K a month: QuickBooks, Wave or Xero.", "$10K+ a month: a fractional bookkeeper, $150 to $400 a month."])}
${C("Crewty handles the front end.", "Crewty handles quotes, invoices, card payments, tips and refunds, and tracks what you owe your crew. Your accounting software handles back-end reconciliation. That is the standard split.")}`,
          },
          {
            slug: "naming-and-branding",
            num: "06",
            title: "Naming and Branding",
            sub: "A name you can own",
            mins: 3,
            video: "",
            detail: ["Live naming session on video", "Brainstorm and shortlist worksheet", "Logo and brand basics checklist"],
            body: `
<p>This is the most important decision in your first week. A weak name quietly costs you for years.</p>
<h3>What makes a good name</h3>
${UL(["Sounds professional. Not tacky, not a pun.", "Easy to spell out loud over the phone.", "Easy to remember after hearing it once.", "Suggests cleanliness or reliability without being a cliche.", "Has the .com available, or a clean variant.", "Has matching handles free on Instagram, Facebook and TikTok."])}
<h3>What to avoid</h3>
${T(["Avoid", "Why"], [["Generic names", "Forgettable and impossible to rank"], ["Your own first and last name", "Hard to sell later, unless it is short and strong"], ["Anything cheesy", "People are trusting you with their house key"], ["City names", "A problem the day you expand"], ["Clever spellings", "They break in voice search and in ads"]])}
<h3>The process</h3>
${OL(["Brainstorm 20 to 30 names without filtering.", "Cross out anything tacky, generic or hard to say.", "Cross out anything you cannot picture on a van or a uniform.", "Take the top five to a domain checker.", "Check the handle on Instagram, Facebook and TikTok.", "Pick the one that survives all of it."])}
${W("Check everything together.", "Never register or buy anything before confirming the .com and all the social handles are free at the same time. Most people skip this and end up with a business name that does not match their website.")}`,
          },
        ],
      },
      {
        title: "The Work",
        desc: "Your kit and what every surface and chemical can take.",
        lessons: [
          {
            slug: "supplies-and-equipment",
            num: "07",
            title: "Supplies and Equipment",
            sub: "The kit, the colour code, what not to buy",
            mins: 5,
            video: "",
            detail: ["Full kit unboxing and setup video", "Printable shopping list with links", "Colour code training card for new cleaners"],
            body: `
<p>A solid solo kit runs about <strong>$300 to $800</strong> and covers standard, deep and move-out work. Buy the minimum, do your first 20 jobs, then upgrade only what actually slows you down.</p>
<h3>The daily kit</h3>
${UL(["Commercial vacuum, HEPA preferred.", "Microfiber cloths, colour coded by zone.", "Microfiber mop with several pads.", "Two-bucket mopping system.", "All-purpose, glass, bathroom and disinfectant cleaners.", "Toilet brush per home, or disposable heads.", "Caddy, nitrile gloves, trash bags, step stool, Magic Erasers."])}
<h3>The colour code, from day one</h3>
${T(["Colour", "Zone"], [["Blue", "Glass and mirrors"], ["Yellow", "General surfaces and dusting"], ["Red", "Bathrooms"], ["Green", "Kitchen"]])}
<p>This is how you stop cross-contamination, and it is the first thing to teach a new cleaner.</p>
<h3>Chemicals to stock</h3>
${UL(["pH-neutral all-purpose, the workhorse.", "Glass cleaner.", "Bathroom acid cleaner for hard water and soap scum.", "Disinfectant, EPA-registered or with a Health Canada DIN.", "Stainless cleaner, stone-safe pH-neutral, wood floor cleaner.", "Carpet pre-spray and a heavy-duty degreaser."])}
<h3>Tools and cloths</h3>
${T(["Tool", "Why you need it"], [
  ["Microfiber cloths, colour coded", "The workhorse. The colour system is what stops cross-contamination"],
  ["Sponges and non-scratch pads", "Soft for counters, non-scratch for build-up. Never rough pads on glass or stone"],
  ["Toilet brush", "One per kit. Replace every six months or sooner"],
  ["Detail brush or old toothbrush", "Faucet bases, grout lines, appliance crevices, vent slats"],
  ["Grout brush", "Stiff bristles for tile grout only"],
  ["Squeegee", "Shower doors, windows, mirrors. Faster and cleaner than cloth alone"],
  ["Extendable duster", "Ceiling fans, blinds, high shelves, vents"],
  ["Scraper or razor blade", "Stuck residue on glass and ceramic cooktops, at a low angle"],
])}
<h3>Personal protection</h3>
${T(["PPE", "Why"], [
  ["Nitrile gloves", "Change pairs between bathroom and kitchen"],
  ["Safety goggles", "Required with bleach, oven cleaner, or any spray near eye level"],
  ["Knee pads", "For anyone spending time on tile and tubs"],
  ["N95 or KN95 mask", "Dusty spaces, mould, strong chemical jobs"],
  ["Non-slip closed-toe shoes", "Wet floors are the leading source of cleaner injuries"],
])}
<h3>Specialty equipment, added as you grow</h3>
${T(["Equipment", "Unlocks", "Entry cost"], [
  ["Portable hot water extractor", "Carpet and upholstery cleaning", "$400 to $800"],
  ["Vapour steam machine", "Grout, tile, sanitising", "$300 to $900"],
  ["Pressure washer", "Driveways, patios, siding", "$200 to $600"],
  ["Backpack vacuum", "Commercial work, speed", "$300 to $500"],
])}
${C("The margin upgrade.", "Steam extraction is the single biggest margin upgrade available in your first year. Most homeowners cannot do it themselves and it adds $150 to $400 on top of a regular clean.", "trending-up")}`,
          },
          {
            slug: "surfaces-and-chemicals",
            num: "08",
            title: "Surfaces and Chemicals",
            sub: "What each surface can and cannot take",
            mins: 4,
            video: "",
            detail: ["Surface identification video, room by room", "Printable surface and chemical chart", "Damage claim prevention checklist"],
            body: `
<p>You cannot quote a job, train a cleaner or stand behind your work without knowing what you are cleaning. The wrong product on the wrong surface ruins the job and can trigger a damage claim that eats a month of profit.</p>
<h3>Hard floors</h3>
${T(["Surface", "Use", "Avoid"], [
  ["Hardwood, sealed", "Microfiber mop, pH-neutral wood cleaner, damp not wet", "Vinegar, bleach, ammonia, steam mops"],
  ["Laminate", "Damp microfiber, laminate cleaner", "Steam mops, floods, oil polish"],
  ["Vinyl and LVP", "Mild detergent and warm water", "Solvents, abrasives"],
  ["Tile", "Neutral tile cleaner", "Acid cleaners on coloured grout"],
  ["Natural stone", "Stone-safe pH-neutral only", "Vinegar, lemon, anything acidic"],
  ["Carpet", "Vacuum first, spot treat, steam extract", "Over-wetting, hot water on wool"],
])}
<h3>Kitchen</h3>
${T(["Surface", "Use", "Avoid"], [
  ["Granite", "Mild dish soap or granite-safe cleaner", "Vinegar, lemon, bleach"],
  ["Quartz", "Mild soap, soft cloth", "Abrasives, high-pH cleaners"],
  ["Marble", "Stone-safe pH-neutral only", "All acids. A lemon slice leaves a mark"],
  ["Stainless", "Stainless cleaner with the grain", "Steel wool, abrasive pads, bleach"],
  ["Glass cooktop", "Cooktop cream and a non-scratch pad", "Powders, scouring pads"],
  ["Fridge interior", "Warm water and baking soda", "Bleach, it lingers in a food space"],
])}
<h3>Bathroom</h3>
${T(["Surface", "Use", "Avoid"], [
  ["Glass shower doors", "Vinegar and water or a scale remover, then squeegee", "Abrasive pads, they scratch glass"],
  ["Chrome", "Mild soap and microfiber, polish dry", "Abrasives, harsh acids"],
  ["Brushed nickel, matte black", "Mild soap and microfiber only", "Vinegar, it strips the finish"],
  ["Acrylic and fiberglass tubs", "Non-abrasive cleaner, soft sponge", "Comet, abrasive powders"],
])}
<h3>The danger list</h3>
<p>Marble, granite, hardwood, leather, velvet, wool and brushed nickel. These are where a wrong product causes permanent damage. When unsure, test in a hidden corner first. Always.</p>
${W("Chemical safety.", "Never mix bleach with ammonia, vinegar, any acid, or hydrogen peroxide. Never put two cleaners in one bottle. Label every spray bottle and throw out anything unlabelled. Keep a Safety Data Sheet binder in the vehicle.")}`,
          },
        ],
      },
      {
        title: "Systems and Marketing",
        desc: "Your website, Crewty, Google, pricing, social and paid ads.",
        lessons: [
          {
            slug: "your-website",
            num: "09",
            title: "Your Website",
            sub: "What it needs, what it costs",
            mins: 3,
            video: "",
            detail: ["Website teardown video of high-converting cleaning sites", "Homepage copy template", "Launch checklist"],
            body: `
<p>Your site is where every ad, business card and social post eventually points. It needs to load fast, look professional, and have one clear action: <strong>book a clean.</strong></p>
<h3>Three realistic options</h3>
${T(["Option", "Cost", "Best for"], [
  ["Build it yourself", "$15 to $40 a month", "You have time and want control. Wix is the most beginner-friendly"],
  ["Hire an agency", "Around $50 a month", "A professional site without thousands up front, usually including hosting and edits"],
  ["Hire a freelancer", "$200 to $1,500 one-time", "Fast and cheap, quality varies, you pay for every change later"],
])}
<p>For most new owners, a $50 a month agency build is better value than sinking thousands into a custom site you will outgrow within a year.</p>
<h3>What the site must have</h3>
${UL(["A headline that answers what you do and where, in under three seconds.", "A Get a free quote or Book now button on every page.", "Your services with prices, or at least starting-at prices.", "Your service area.", "Real photos of completed work. Stock is acceptable at the start, real converts better.", "Trust signals: insured, Google rating, satisfaction guarantee.", "A short About section with a real face.", "Phone and email in the header and the footer.", "A simple booking form: name, email, phone, address, type of clean, when.", "Mobile-first, because most of your traffic is mobile.", "Fast load. Over three seconds and your paid clicks bounce."])}
${C("Crewty gives you the booking half.", "Crewty provides a branded booking page and an embeddable booking form for your site, so a client picks a service and a time and it lands straight on your calendar. No call, no callback, no lost lead.")}`,
          },
          {
            slug: "setting-up-crewty",
            num: "10",
            title: "Setting Up Crewty",
            sub: "Fresh account to paid bookings in about 20 minutes",
            mins: 7,
            video: "",
            detail: ["Full Crewty setup filmed screen by screen", "Service and pricing templates to import", "Recurring client migration walkthrough"],
            nudge: "crewty",
            body: `
<p>Set this up before you spend anything on ads. Sending paid traffic to a half-built booking page wastes money. Crewty runs in your browser at crewty.com and on the mobile app. Your crew only needs the app.</p>
<h3>Before you start</h3>
${UL(["A real email address you can check. Invites, invoices and codes go there.", "Your business bank details. Stripe needs them to pay you.", "Your service list and prices, even rough ones."])}
<h3>The setup, in order</h3>
<p>There is a Get started checklist on your Dashboard that tracks these. Each step depends on the one before it.</p>
${T(["Step", "Where", "Time"], [
  ["1. Create your account", "Sign up and verify by email", "3 min"],
  ["2. Connect Stripe", "Settings &gt; Payments", "5 min"],
  ["3. Confirm your currency", "Settings &gt; Payments", "1 min"],
  ["4. Create your first service", "Forms", "8 min"],
  ["5. Create a test booking", "Dashboard &gt; Add Booking", "2 min"],
  ["6. Add your staff", "Staff", "4 min each"],
])}
<p>Your card is not charged on signup. Every plan starts with a 7 day free trial and the card is held so the workspace keeps running after it.</p>
${W("Stripe is the one that blocks everything.", "Until Stripe is connected you cannot take card payments, send payment links, or charge a card on file. Crewty uses your own Stripe account, so money goes from your client straight to you. Set aside five uninterrupted minutes, because leaving halfway means starting that section again.")}
<h3>Building a service</h3>
<p>A service is what a client books. Start from a template rather than a blank screen, which is where most first-time setup stalls.</p>
${UL(["Name and description, which is what the client sees.", "Pricing: fixed, hourly, or calculated from the client's answers.", "Duration, used for scheduling and for staff pay on booked time.", "Custom questions: how many bedrooms, pets, gate code. Answers can change the price and the time.", "Deposit, optional, taken up front."])}
<p>Only active services appear on new bookings and on your public booking form. Editing a service does not change bookings already made.</p>
<h3>Where everything lives</h3>
${T(["Section", "What it is for"], [
  ["Dashboard", "Today's jobs, the calendar, and Add Booking"],
  ["Recurring", "Standing jobs that repeat on a schedule"],
  ["Clients", "All clients, invited, leads"],
  ["Staff", "App staff and label staff"],
  ["Finance", "Staff payments, booking invoices, custom invoices"],
  ["Forms", "Your services and their pricing"],
  ["Online Booking", "Your public page and the website embed"],
  ["Gallery", "Before and after photos"],
  ["Analytics", "Revenue, clients, staff, and the AI Analyst"],
  ["Learning", "Guides, videos and the guided tour"],
])}
<p>Press Ctrl+K, or Cmd+K on a Mac, to jump straight to any section.</p>
<h3>Online booking</h3>
<p>Online Booking &gt; Booking Page gives you a public link. Online Booking &gt; Embed Form gives you a snippet for your own website. Clients pick a service, answer your questions, see the price, choose a time and leave a card. The job lands on your schedule with the client file already created, and your business hours and double-booking rules are respected automatically.</p>
<h3>Recurring jobs</h3>
<p>Recurring &gt; New Series. Pick a client, a service, a frequency and an end date. Crewty creates every visit, assigns the same crew and charges the card on file. Skip or move a single visit without disturbing the rest of the series.</p>
<p>Under Settings &gt; Booking Flow you can set a discount per frequency, so weekly clients automatically pay less per visit than monthly ones.</p>
<h3>Staff and time tracking</h3>
${UL(["Staff see only their own schedule. They never see your prices or anyone else's pay.", "Pay each person by the hour, by booked time, a fixed amount per job, or a percentage of the job total.", "Clock-in is optional. Turn it on for real hours with GPS, or off so staff just mark jobs complete.", "With clock-in off, pay switches to the job's booked hours, because there is no clock to read."])}
<h3>Finance</h3>
${T(["Tab", "What it holds"], [
  ["Staff Payments", "A payment row per assigned cleaner when a job completes, from their rate and hours"],
  ["Booking Invoices", "Every invoice tied to a booking, showing paid, unpaid and overdue"],
  ["Custom Invoices", "One-off invoices with your own line items, tax and terms"],
])}
<h3>Airbnb and short-term rentals</h3>
<p>Connect a property's calendar from Airbnb, Vrbo or Booking.com and Crewty creates a cleaning job after every checkout. It flags same-day turnovers, works out the real window between checkout and the next check-in, and warns you when a clean will not fit the gap.</p>
<p>To onboard a host, send one link. They paste their calendar URL and save a card. They do not need a Crewty account. Bill per turnover or bundle into one monthly invoice.</p>
<h3>Plans and limits</h3>
${T(["", "Starter", "Pro", "Premium"], [["Price", "$29.99/mo", "$59.99/mo", "$149.99/mo"], ["Staff", "5", "15", "50"], ["Admin seats", "1", "5", "10"], ["Active services", "5", "25", "50"]])}
<p>Every plan includes the 7 day trial, the mobile app, online booking, invoicing and card payments. Plan changes take effect immediately, with upgrades charged prorated and downgrades credited.</p>
<h3>A sensible first week</h3>
${T(["Day", "What to do"], [
  ["Day 1", "Account, Stripe, currency, first service, test booking. About 20 minutes"],
  ["Day 2", "Add your real services. Take the guided tour while you do it"],
  ["Day 3", "Invite your cleaners and set their pay rates"],
  ["Day 4", "Put your booking link on your website, email signature and Google profile"],
  ["Day 5", "Move your recurring clients across and add their cards on file"],
  ["Day 6", "Set deposits on your busiest services to cut no-shows"],
  ["Day 7", "Open Analytics and see what the week told you"],
])}
${C("Your crew's side.", "Staff use a separate app at crewty.com/staff or the mobile app. They get Today, Schedule, Time off, Pay, History and Gallery. The separation is deliberate: your pricing, your margins and other people's pay are never visible to the crew.", "users")}`,
          },
          {
            slug: "google-business-and-lsa",
            num: "11",
            title: "Google Business and LSA",
            sub: "The free listing and the paid one",
            mins: 3,
            video: "",
            detail: ["Profile setup and verification on video", "Review request message templates", "LSA application walkthrough"],
            body: `
<p>Your Google Business Profile is the most important free marketing asset you have, and it is required before you can apply for Local Service Ads.</p>
<h3>Profile setup</h3>
${OL(["Use a dedicated business Google account, never a personal one.", "Enter your business name exactly as registered. No city names, no keywords.", "Primary category: House cleaning service.", "Hide your address if you work from home, and set a realistic service area.", "Add phone, website and hours using your domain email.", "Verify. The postcard takes 5 to 14 days.", "Upload 10 to 15 real photos before launch, then 1 to 2 a week."])}
<h3>The review rules, not optional</h3>
${UL(["Only ask people genuinely inside your service area.", "One review per household. Not the husband and the wife.", "Never review your own business and never buy or trade reviews.", "Spread them out. Twenty in three days looks fake. Two to five a month looks healthy.", "Never offer a discount or gift for a review. It violates Google's policy."])}
<h3>Local Service Ads</h3>
${T(["Requirement", "Detail"], [["Verified profile", "Must be live first"], ["Insurance", "Proof required at application"], ["Background check", "5 to 14 days"], ["Phone answered by a person", "Voicemail-only kills your ranking"], ["Starting budget", "$200 to $400 a week"]])}
${C("The one rule for LSA.", "Pick up the phone. If you miss a call during a clean, follow up by text within five minutes. Google measures responsiveness, and it decides where you rank.", "phone")}`,
          },
          {
            slug: "pricing-your-cleans",
            num: "12",
            title: "Pricing Your Cleans",
            sub: "The formula, the anchors, the increases",
            mins: 4,
            video: "",
            detail: ["Pricing calculator spreadsheet", "Competitor call script, recorded", "Price increase email and text templates"],
            body: `
<p>Most new owners pick prices by guessing. They under-price out of fear and end up with a packed schedule and no profit. Price in the middle to upper-middle of your local market.</p>
<h3>How to find your starting prices</h3>
${OL(["Call 5 to 8 local competitors as a customer and get quotes for a standard 3 bed, 2 bath and a deep clean.", "Check 3 to 5 competitor websites for starting-at prices.", "Build a simple table of what they charge by service type.", "Position yourself middle to upper-middle. Bottom of market attracts the worst clients."])}
<h3>The internal maths</h3>
<p>Estimated hours times crew size times your target hourly rate, plus supplies and drive time, plus 20 to 30% margin. Then quote it as one flat number.</p>
<h3>Price anchors</h3>
${T(["Service", "How to price it", "Typical range"], [
  ["Standard recurring", "Flat per home", "$120 to $200"],
  ["Deep clean", "1.5x to 2x standard", "$250 to $450"],
  ["Move-in and move-out", "2x to 3x standard, 4 hour minimum", "$350 to $650"],
  ["Post-construction", "Flat, premium", "Quote high"],
  ["Airbnb turnover", "Flat per turnover", "$80 to $150"],
  ["Carpet steam", "Per room", "$40 to $80"],
  ["Upholstery steam", "Per piece", "$80 to $150"],
])}
<h3>Add-ons, priced separately</h3>
${UL(["Inside oven, $45 to $120.", "Inside fridge, $35 to $60.", "Interior windows, per window.", "Inside cabinets.", "Laundry, per load.", "Anything not on the list gets quoted before you do it, never after."])}
<h3>Adjustment rules</h3>
${UL(["Serious lead pushing back: offer $10 to $20 off or a free add-on. Never slash 30%.", "Cheap shopper asking for half price: let them go. Cheap clients cause the most damage.", "New client prices rise every six months, 5 to 10%.", "Existing recurring clients: one rise a year, 5 to 10%, with 30 days notice.", "If a home consistently runs 30% longer than estimated, the price goes up."])}
${C("The price increase message.", "As of [date], our rate for your clean is $[X]. Thank you for being a valued client. Thirty days notice, no apologising, no long explanation. The more you explain, the more negotiable it sounds.", "message")}`,
          },
          {
            slug: "organic-social",
            num: "13",
            title: "Organic Social",
            sub: "The long game that pays forever",
            mins: 3,
            video: "",
            detail: ["Filming and editing a before and after, start to finish", "30 day content calendar", "Caption and hook swipe file"],
            body: `
<p>Paid ads are how you survive year one. Organic is how you stop needing them. Expect first real leads at the 4 to 8 month mark and meaningful inbound past 12 months.</p>
<h3>Where to be</h3>
${T(["Platform", "Why"], [["Facebook", "Cleaning is local and trust-based, and your buyer lives there"], ["Instagram", "Clients look you up before booking. An empty profile kills bookings"], ["TikTok", "Rewards new accounts, and cleaning content is naturally satisfying"]])}
<p>Skip LinkedIn, X and YouTube at the start.</p>
<h3>The five content types that work</h3>
${T(["Type", "Why it works"], [["Before and after", "Highest engagement everywhere. Buyers see proof"], ["Time-lapse clean", "Satisfying, and algorithms reward watch time"], ["Cleaning tips", "Builds authority and gets shared"], ["Behind the scenes", "Humanises the brand"], ["Client reviews on screen", "Social proof from content you already have"]])}
<h3>Cadence</h3>
${UL(["Months 1 to 2: three posts a week per platform.", "Months 3 to 6: four to five a week.", "After that: daily if you want to scale.", "Do not post 5 to 10 times a day from a brand new page. It gets flagged as spam."])}
<h3>Filming</h3>
${UL(["Ask the homeowner first and put the question in your booking form.", "Shoot vertical, on a tripod or magnetic mount.", "Film the before the moment you walk in, before touching anything.", "Film the after from the identical angle.", "Open the blinds and capture the audio.", "Shoot far more than you need, then edit in CapCut."])}
${C("Build the library first.", "Shoot every job for two months even if you post none of it. By the end you have enough footage to post daily for a year.", "video")}`,
          },
          {
            slug: "paid-ads",
            num: "14",
            title: "Paid Ads",
            sub: "The testing system and the budget",
            mins: 3,
            video: "",
            detail: ["Building the campaign in Ads Manager, on screen", "8 proven ad hooks with examples", "Weekly ad review checklist"],
            body: `
<p>This is where most owners burn money without learning anything. <strong>Meta first</strong>, because it has the best targeting and creative options for cleaning. Local Service Ads second for intent. Google Search third. TikTok fourth.</p>
<h3>Before you spend</h3>
${UL(["Your Facebook page is live with 5 to 10 posts.", "Your Instagram is connected.", "Your website has a working booking form.", "The Meta pixel is installed and a Lead event fires on every booking or quote."])}
<p>Without conversion tracking the algorithm flies blind and you waste money.</p>
<h3>The 8-ad testing system</h3>
${T(["Element", "Setting"], [["Ads created", "8, different hooks and visuals"], ["Ads running at once", "3, in the same ad set"], ["Structure", "1 campaign, 1 ad set, 3 ads"], ["Daily budget", "$20 to $25"], ["Optimisation", "Leads, using the Lead event"], ["Audience", "Broad: city or radius plus an age range"]])}
<h3>The cycle</h3>
${T(["What you see", "What to do"], [["One clearly wins", "Keep it, pause the losers, pull in two fresh ads"], ["One dead, two mediocre", "Pause the dead one, add one fresh ad"], ["All three flat", "Pause all three. Your hooks were wrong"]])}
<h3>Reading the data</h3>
${T(["Metric", "When to worry"], [["Cost per lead", "Over $100 after two weeks needs new creative"], ["Click-through rate", "Under 1% means the hook or visual is weak"], ["Frequency", "Over 3.5 in a week means fatigue"], ["Conversion rate", "Under 5% means the landing page, not the ad"]])}
${C("You still have to close them.", "The most expensive thing in advertising is generating a lead and not picking up the phone. Answer within two rings, reply to every form within five minutes, and quote confidently. Confidence closes more than discounting.", "phone")}`,
          },
        ],
      },
      {
        title: "Team and Growth",
        desc: "Hiring, client operations, scaling, crew checklists and your cleaner agreement.",
        lessons: [
          {
            slug: "hiring-cleaners",
            num: "15",
            title: "Hiring Cleaners",
            sub: "The screen, the test job, the first week",
            mins: 4,
            video: "",
            detail: ["Recorded phone screens, good and bad", "Job post templates for Facebook and Indeed", "Test clean scorecard"],
            nudge: "discord",
            body: `
<p>Reliable cleaners decide whether your business survives growth. You cannot interview your way to a good one. You can only test your way to one.</p>
<h3>Are you ready to hire?</h3>
${UL(["Booked five or more days a week.", "Turning down jobs for lack of time.", "$3,000 or more in the account.", "Your process written down."])}
<p>If any of those are missing, keep doing the work yourself a few more weeks.</p>
<h3>The phone screen, ten minutes</h3>
${OL(["Do you have your own vehicle, and how far will you travel?", "Do you have supplies, or do you need us to provide them?", "How many years of cleaning experience, and what kind of jobs?", "How is your reliability? Have you missed shifts before?", "Walk me through how you would deep clean a kitchen.", "What rate are you looking for?", "Are you comfortable being filmed during cleans for social media?", "Are you free next week for a paid trial clean?"])}
<p>The kitchen question tells you the most. People who have done it describe an order. People who have not use adjectives.</p>
<h3>The paid test clean</h3>
${OL(["Send them to your own home, a friend's or a family member's. Pay $50 to $100.", "Have them do a full standard clean with a stated time expectation.", "Inspect it as if you were a paying client.", "Score quality, time management, attitude and supply handling.", "Pass means a 30 to 60 day probation. Fail means you paid a small amount to avoid losing a client."])}
<h3>Red flags</h3>
${UL(["Vague about reliability.", "Trashes old bosses.", "Cannot explain a basic task.", "Pushes for more money before proving anything.", "Late to the phone call itself."])}
<h3>The first week</h3>
${T(["Day", "What happens"], [["Day 1", "Shadow you on two or three jobs"], ["Days 2 to 3", "Clean while you supervise"], ["Days 4 to 5", "Clean solo with you nearby"], ["Week 2", "First independent job, sent to a forgiving client"]])}
${C("Keeping good cleaners.", "Pay on time every week without fail, hold a 15 minute check-in on Fridays, and correct problems fast and in writing. Late pay is the quickest way to lose someone good, and a reputation as a fair payer travels fast in local trades.", "users")}`,
          },
          {
            slug: "client-operations",
            num: "16",
            title: "Client Operations",
            sub: "Policies, difficult clients, getting paid",
            mins: 4,
            video: "",
            detail: ["Policy page template, ready to paste", "Scripts for the five most difficult client situations", "Recurring client upsell script"],
            body: `
<p>Five policies go in writing before the first clean. Put them on the website, the booking confirmation and the quote, so nobody can say they did not know.</p>
<h3>The five policies</h3>
${T(["Policy", "What it says"], [
  ["Cancellation", "24 hours notice. Same-day charged 50%. Lock-outs charged in full"],
  ["Satisfaction guarantee", "Tell us within 24 hours and we return to redo that area free"],
  ["Damage", "What is covered, what is reported, and how"],
  ["Access and safety", "Keys, codes, pets, parking"],
  ["Payment terms", "Card on file or due within 7 days. 5% late fee on day 8"],
])}
<p>The satisfaction guarantee ends most complaints before they become refunds. Most unhappy clients do not want money back, they want acknowledgement and a fix.</p>
<h3>Difficult clients</h3>
${T(["Pattern", "How to handle it"], [
  ["Refuses to pay, claims dissatisfaction", "Offer to send the cleaner back free before any refund talk. Document everything"],
  ["Constantly adds requests", "Note it is outside the booked service and quote it as an add-on"],
  ["Negotiates after every clean", "Hold the line. If it keeps happening, drop them"],
  ["One-star review with no warning", "Reply professionally, mention the redo policy, take it offline"],
  ["Wants to pay cash to skip tax", "Decline. It damages your bookkeeping and can void your insurance"],
])}
<h3>Recurring clients are the whole game</h3>
${UL(["No ad cost after the first booking, so it is pure margin.", "A $200 weekly client is $10,400 a year.", "Five to six recurring weekly clients is $3,000 to $4,800 a month in baseline revenue.", "Ask on the first booking. Offer 5 to 10% off for biweekly, not 20%.", "Book the next date before you leave, not by email later."])}
<h3>Operational habits</h3>
${UL(["Confirm every booking the day before.", "Photograph before and after on every clean, for liability.", "Keep notes per client: pets, allergies, keys, parking, gate code.", "Track real time per home, not estimated.", "Review your numbers every Friday."])}
${C("Crewty keeps the record.", "Client notes, job photos, invoices and payment history sit on the client file, so the cleaner on site has the gate code and you have the paper trail if a client disputes anything.")}`,
          },
          {
            slug: "scaling-beyond",
            num: "17",
            title: "Scaling Beyond",
            sub: "The path past $20K a month",
            mins: 3,
            video: "",
            detail: ["Commercial bidding walkthrough with a real proposal", "Org chart and hiring plan by revenue stage", "SOP library starter pack"],
            body: `
<p>At $20K to $50K a month, almost nobody is making the bulk of their revenue from one-off residential cleans. The money comes from fewer, much larger recurring contracts.</p>
<h3>Where the money is</h3>
${T(["Client type", "Why it pays", "What it demands"], [
  ["Condo and apartment common areas", "$2K to $10K a month each", "Bid process, bonded team, after-hours access"],
  ["Offices and coworking", "$3K to $15K a month each", "Reliable evening team, insurance proof"],
  ["Medical and dental", "Premium for sanitation", "Disinfection training, no margin for error"],
  ["Airbnb networks", "Multiple turnovers per host", "Tight scheduling, linens, photo documentation"],
  ["Real estate brokerages", "Move-out and listing cleans", "Fast turnaround"],
  ["Property managers", "Many doors under one client", "Scalable team and clear reporting"],
])}
<h3>A realistic mix at $30K a month</h3>
${UL(["About 30% recurring residential.", "About 35% commercial and condo contracts.", "About 20% Airbnb networks.", "About 15% specialty work."])}
<h3>What you need before you bid</h3>
${UL(["A polished site with a commercial section.", "40 or more Google reviews, mostly five star.", "Insurance upgraded to $2M to $5M.", "WSIB or WCB coverage for your team.", "Bondable, background-checked cleaners.", "Three to five cleaners you have worked with for six months or more.", "Documented SOPs and a repeatable training process."])}
<h3>When to hire each role</h3>
${T(["Revenue", "Next hire"], [["$5K to $8K", "A second reliable cleaner"], ["$8K to $12K", "Third and fourth cleaner, part-time admin"], ["$12K to $20K", "Crew lead, plus full-time admin and scheduler"], ["$20K to $35K", "Operations manager. You stop touching the schedule"], ["$35K+", "Sales for commercial bidding, marketing for ads and content"]])}
${C("The owner shift.", "The hardest part of scaling is psychological. You stop doing every clean and being the only person who answers the phone. You start building relationships with property managers, reviewing numbers weekly, and training your team to deliver your standard without you there.", "trending-up")}`,
          },
          {
            slug: "room-by-room",
            num: "18",
            title: "Room by Room",
            sub: "The order, the checklist, the things that get missed",
            mins: 7,
            video: "",
            detail: ["Full standard clean filmed start to finish", "Printable room by room checklists", "Deep clean and move-out add-on checklists"],
            body: `
<p>Work <strong>top to bottom, back to front, dry to wet.</strong> Same order, every room, every time. A consistent order saves time and stops cleaners missing spots.</p>
<p>The standard pattern: open windows or vents, declutter, dust from top to bottom, wipe surfaces, clean wet areas, then vacuum and mop on the way out so nobody walks on wet floors.</p>
<h3>Kitchen</h3>
<p>The dirtiest room in the house. Grease, food residue and high-touch zones. Always disinfect after wiping.</p>
${UL(["Steam the microwave with water and lemon for 60 seconds, then wipe out.", "Range hood first, then stovetop. Degreaser on baked-on areas.", "Appliance exteriors, with the grain on stainless.", "Clear and wipe counters in full. Move every item, do not clean around them.", "Scrub the sink including the faucet base and drain, polish at the end.", "Spot clean cabinet fronts, especially around handles.", "Small appliances, trash out and liner replaced, then sweep and mop on the way out."])}
<p><strong>Deep clean adds:</strong> pull out the fridge, hot vinegar cycle in the dishwasher, inside the oven, inside every cabinet and drawer, descale the kettle.</p>
${W("Watch out.", "Sharp knives left in soapy water. Always rinse, dry and put them back before moving on.")}
<h3>Bathrooms</h3>
<p>Sanitation matters more here than anywhere. Separate cloths and separate gloves, never reused in the kitchen.</p>
${UL(["Toilet bowl cleaner first, let it sit while you do the rest.", "Spray tub, shower and tile, let it dwell.", "Mirror, then counter, faucet and sink. Polish chrome at the end.", "Scrub tub and shower, squeegee the glass doors.", "Toilet outside first, bowl last with the brush.", "Trash, liner, restock paper, then sweep and mop ending at the door."])}
<p><strong>Deep clean adds:</strong> scrub grout lines, soak the showerhead in vinegar, wipe inside the vanity and cabinet, wash bath mats and curtains, remove hard water spots fully.</p>
${W("Watch out.", "Never mix toilet cleaner with bleach. Many bowl cleaners contain acid and react badly. In a small room the fumes pool fast, so open the door and run the fan.")}
<h3>Bedrooms</h3>
${UL(["Strip and remake the bed if linens are provided.", "Dust top to bottom: fan, shelves, dresser, headboard, baseboards.", "Glass and mirrors, trash out.", "Vacuum, including under the bed if reachable."])}
<p><strong>Deep clean adds:</strong> flip or rotate the mattress after asking, vacuum the mattress and use baking soda for odours, wash duvet covers and protectors, clean blinds slat by slat.</p>
${W("Watch out.", "Personal items. Do not move jewellery or paperwork unless asked. Photograph the room first if anything looks valuable.")}
<h3>Living and family room</h3>
${UL(["Dust electronics with a dry microfiber. Never spray cleaner at a screen.", "Wipe all hard surfaces, fluff cushions, vacuum the sofa with the upholstery tool.", "Glass tables and mirrors, trash out, then vacuum and mop."])}
<p><strong>Deep clean adds:</strong> lift cushions and vacuum underneath, spot clean upholstery, dust inside bookshelves, wipe ceiling fan blades.</p>
<h3>Dining room</h3>
${UL(["Chandelier and light fixtures.", "Table, wiped according to its material.", "Chair seats and backs, then sweep and mop."])}
${W("Watch out.", "Decorative bowls and glassware are usually fragile. Move them with two hands or not at all.")}
<h3>Laundry room</h3>
${UL(["Wipe the washer and dryer exteriors.", "Remove and rinse the detergent drawer.", "Empty and wipe the lint trap.", "Shelves and counters, then sweep and mop."])}
${C("Flag it to the client.", "Lint buildup behind the dryer is a real fire risk. If you find heavy buildup, tell the client and note it on the job.")}
<h3>Home office</h3>
${UL(["Dust around items, not under them, unless the client said it was fine.", "Monitor with a dry screen cloth only.", "Keyboard and mouse with a barely damp cloth.", "Trash out, then vacuum or mop."])}
${W("Watch out.", "Never unplug anything to clean. Work around cables, documents and drives.")}
<h3>Entryway, hallway and stairs</h3>
${UL(["Door, frame and baseboards.", "Handles, light switches and the door itself.", "Shake out or vacuum entry mats.", "Stairs from top to bottom, then mop the entry floor last."])}
${W("Watch out.", "Stairs are slippery when damp. Put a sign out or tell the client before mopping.")}
<h3>Pet homes</h3>
<p>Pet hair embeds into fabric and floats into corners vacuums miss. Add 10 to 15 minutes to every clean.</p>
${T(["Tool", "How to use it"], [
  ["Rubber gloves, slightly damp", "Run gloved hands over upholstery. Hair clumps into rolls"],
  ["Squeegee", "Pulled across carpet, lifts hair the vacuum leaves behind"],
  ["Lint roller, full size", "Lampshades, throws, clothing left on furniture"],
  ["Vacuum with a rotating brush", "A pet-rated head is worth the upgrade in any pet home"],
  ["Dry microfiber", "Hard floors. Push hair to the centre, then vacuum"],
])}
${UL(["Vacuum first, dust second. Hair stirred up by vacuuming resettles on freshly dusted surfaces.", "Damp cloth on hard floors. Dry sweeping just spreads it.", "Confirm where the pet is before opening any door.", "Avoid lavender, tea tree and citrus oils. They can be toxic to cats."])}
${C("Allergy clients.", "Switch to fragrance-free products, use a HEPA vacuum, and damp dust everywhere. A barely wet microfiber traps allergens instead of sending them into the air.")}`,
          },
          {
            slug: "cleaner-agreement",
            num: "19",
            title: "Cleaner Agreement",
            sub: "A template to fill in before the first job",
            mins: 5,
            video: "",
            detail: ["Editable agreement in Word and Google Docs", "Clause by clause explainer video", "Onboarding packet to send with it"],
            body: `
<p>A template agreement between a cleaning company and an independent cleaner. Fill in the bracketed fields, have a local lawyer review it, and get both signatures before the first job.</p>
<h3>1. The parties</h3>
<p>This agreement is made on the date below between the cleaning company (the Company) and the individual cleaner (the Cleaner). Both parties agree to the terms in this document. Fill in: company name, address and contact; cleaner name, address, phone and email; agreement date.</p>
<h3>2. Role and scope</h3>
<p>The Cleaner will perform residential cleaning for clients booked through the Company. Duties may include dusting, vacuuming, mopping, bathroom sanitation, kitchen cleaning, trash removal, laundry support, and anything listed on the job brief provided before each booking. The Cleaner agrees to follow the Company checklist and use approved products unless told otherwise.</p>
<h3>3. Independent contractor status</h3>
<p>The Cleaner is engaged as an independent contractor, not an employee, partner or agent. The Cleaner is responsible for their own taxes, insurance and any filings required in their jurisdiction. Nothing here creates an employment relationship.</p>
<h3>4. Pay</h3>
<p>The Cleaner is paid at the agreed rate after each job is completed and verified. Tips are paid in full to the Cleaner. The Cleaner is responsible for declaring all income earned under this agreement. Fill in: rate, pay frequency, payment method.</p>
<h3>5. Hours and scheduling</h3>
<p>Jobs are offered through the Company's scheduling system. The Cleaner may accept or decline any booking. Once accepted, the Cleaner arrives on time and completes the job to the standard in the brief. Cancellations by the Cleaner are communicated at least 24 hours ahead wherever possible.</p>
<h3>6. Equipment and supplies</h3>
<p>The Company provides a starter kit. The Cleaner keeps it in good condition, returns borrowed items at the end of the engagement, and reports damage or loss within 48 hours. Personal tools are fine, but no harsh or untested chemicals go into a client home without written approval.</p>
<h3>7. Conduct</h3>
<p>The Cleaner presents professionally, respects the client and their property, does not smoke inside any client home, and treats household items with care. No using a client's personal items, food or drink without explicit permission. Pets are treated kindly and never left able to escape.</p>
<h3>8. Confidentiality</h3>
<p>The Cleaner keeps all client information confidential, including addresses, access codes, household details and anything observed. Photographs of a client's home are prohibited unless the Company has written client permission. This continues after the agreement ends.</p>
<h3>9. Health, safety and liability</h3>
<p>The Cleaner follows all safety procedures in the Company's onboarding documents: safe lifting, proper ventilation with strong products, and never mixing incompatible chemicals such as bleach with ammonia or vinegar. The Cleaner accepts responsibility for damage caused by negligence or misuse of products.</p>
${C("Insurance.", "The Company strongly recommends the Cleaner carries general liability insurance, with a copy of the policy provided before the first job.", "shield")}
<h3>10. Client non-solicitation</h3>
<p>The Cleaner agrees not to solicit, contact or accept private work from any client introduced by the Company, during this agreement and for twelve months after it ends. Private arrangements with Company clients in that period are a breach.</p>
<h3>11. Termination</h3>
<p>Either party may end this agreement at any time, with or without cause, by written notice. The Cleaner is paid for all completed jobs up to that date. The Company may end it immediately for serious cause, including theft, repeated no-shows, breach of confidentiality or unsafe behaviour.</p>
<h3>12. Disputes and governing law</h3>
<p>Both parties try to resolve disputes through good-faith discussion first. If that fails, the dispute is handled under the laws of the named jurisdiction, with courts there holding exclusive authority.</p>
<h3>13. Entire agreement</h3>
<p>This document is the full agreement between the parties on the subjects it covers. Any change must be in writing and signed by both. If a court finds any clause unenforceable, the rest stays in effect.</p>
<h3>14. Signatures</h3>
<p>Name, signature and date for both the Company and the Cleaner.</p>
${W("Before you use this.", "This is a template, not legal advice. Contractor rules differ between provinces and states, and misclassifying an employee as a contractor can mean back taxes and penalties. Have a local lawyer or accountant review it once before you use it with anyone.")}`,
          },
        ],
      },
    ],
  };
})();
