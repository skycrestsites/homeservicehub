/*
  Cleaning Business course content.
  Placeholder curriculum: replace titles, bodies and takeaways with the real course documents.
  "body" accepts HTML (p, h3, ul, ol, strong, .callout). "nudge" can be "crewty" or "discord".
*/
window.COURSE = {
  id: "cleaning",
  title: "Cleaning Business",
  subtitle: "From first client to a team that runs without you",
  modules: [
    {
      title: "Foundations",
      summary: "Set the business up the right way",
      lessons: [
        {
          title: "Welcome and how to use this course",
          duration: "4 min",
          body: `
            <p>Welcome to the Home Service Hub Cleaning Business course. This course is built from what working owners actually do day to day, and it is completely free.</p>
            <p>Work through the modules in order if you are starting from zero. If you already have clients, jump straight to the module that fixes your biggest problem today.</p>
            <h3>How the course is organized</h3>
            <ul>
              <li><strong>Foundations</strong> covers setup, insurance and supplies.</li>
              <li><strong>Pricing and Quoting</strong> shows you how to charge with confidence.</li>
              <li><strong>Getting Clients</strong> fills your calendar with recurring work.</li>
              <li><strong>Hiring, Systems and Scaling</strong> help you step back from doing every clean yourself.</li>
            </ul>
            <div class="callout"><span data-i="lightbulb"></span><div><b>Tip:</b> Mark each lesson complete as you go. Your progress is saved in this browser so you can pick up where you left off.</div></div>
          `,
          takeaways: ["The course is free and self paced", "Start at Module 1 if you are new", "Progress saves automatically"],
        },
        {
          title: "Choosing your business structure",
          duration: "7 min",
          body: `
            <p>Before you take your first paid job, set up a simple legal structure. It protects you personally and makes you look professional to clients.</p>
            <h3>Common options</h3>
            <ul>
              <li><strong>Sole proprietor:</strong> the fastest way to start, but no separation between you and the business.</li>
              <li><strong>LLC:</strong> the most popular choice for cleaning businesses. Low cost and protects personal assets.</li>
            </ul>
            <h3>Your setup checklist</h3>
            <ol>
              <li>Pick and check your business name.</li>
              <li>Register your LLC with your state.</li>
              <li>Get an EIN from the IRS (free).</li>
              <li>Open a separate business bank account.</li>
            </ol>
          `,
          takeaways: ["An LLC is the common choice", "Keep business money separate", "Get your EIN before your first hire"],
        },
        {
          title: "Insurance and bonding",
          duration: "6 min",
          body: `
            <p>Clients are letting you into their homes. Insurance and bonding protect you, and they are one of the strongest trust signals you can put on your website.</p>
            <h3>What you need</h3>
            <ul>
              <li><strong>General liability</strong> covers damage to a client's property.</li>
              <li><strong>Janitorial bond</strong> covers theft claims and builds trust.</li>
              <li><strong>Workers comp</strong> is required in most states once you hire.</li>
            </ul>
            <div class="callout"><span data-i="shield"></span><div><b>Trust signal:</b> Put "Licensed, Bonded and Insured" on your website, quotes and Google profile.</div></div>
          `,
          takeaways: ["General liability first", "A bond builds client trust", "Plan for workers comp when you hire"],
        },
        {
          title: "Supplies and your starter kit",
          duration: "8 min",
          body: `
            <p>You do not need expensive equipment to start. A focused kit of quality supplies covers almost every residential job.</p>
            <h3>Starter kit</h3>
            <ul>
              <li>A quality HEPA vacuum and a microfiber mop system</li>
              <li>Color coded microfiber cloths (kitchen, bath, general, glass)</li>
              <li>All purpose cleaner, degreaser, glass cleaner and disinfectant</li>
              <li>Scrub brushes, detail brushes, squeegee and a caddy</li>
            </ul>
            <p>Restock on a schedule, not when you run out. Running out mid clean costs time and looks unprofessional.</p>
          `,
          takeaways: ["Start lean with quality basics", "Color code to prevent cross contamination", "Restock on a schedule"],
        },
      ],
    },
    {
      title: "Pricing and Quoting",
      summary: "Charge what you are worth",
      lessons: [
        {
          title: "How to price a clean",
          duration: "9 min",
          body: `
            <p>Pricing is where most new owners leave money on the table. Your price needs to cover labor, supplies, travel, overhead and profit.</p>
            <h3>A simple formula</h3>
            <ol>
              <li>Estimate the hours the job will take.</li>
              <li>Multiply by your target hourly rate (including labor cost and profit).</li>
              <li>Add supplies and travel.</li>
              <li>Round to a clean, confident number.</li>
            </ol>
            <div class="callout"><span data-i="dollar"></span><div><b>Rule of thumb:</b> Labor should be around 50% of the price or less if you want room to hire and grow.</div></div>
          `,
          takeaways: ["Price covers labor, supplies, travel, overhead and profit", "Keep labor near 50% of price", "Round to confident numbers"],
        },
        {
          title: "Hourly vs flat rate pricing",
          duration: "6 min",
          body: `
            <p>Flat rate pricing is easier for clients to say yes to, and it rewards you for getting faster. Hourly pricing protects you on unpredictable jobs.</p>
            <ul>
              <li><strong>Use flat rate</strong> for standard and recurring cleans once you know the home.</li>
              <li><strong>Use hourly or a range</strong> for post construction or heavy deep cleans.</li>
            </ul>
          `,
          takeaways: ["Flat rate for predictable work", "Hourly or ranges for unknowns", "Speed should increase your profit"],
        },
        {
          title: "Quoting on the first call",
          duration: "8 min",
          body: `
            <p>The faster you quote, the more jobs you win. Build a short list of questions so you can quote most homes in under five minutes.</p>
            <h3>Questions to ask</h3>
            <ol>
              <li>Bedrooms, bathrooms and approximate square footage</li>
              <li>When was the home last professionally cleaned?</li>
              <li>Pets, special surfaces or problem areas</li>
              <li>One time, or recurring weekly, biweekly or monthly?</li>
            </ol>
            <p>Send the quote in writing right away and include a clear button to book.</p>
          `,
          takeaways: ["Speed to quote wins jobs", "Use the same questions every time", "Always send a written quote with a booking link"],
          nudge: "crewty",
        },
        {
          title: "Raising your prices",
          duration: "5 min",
          body: `
            <p>If you are booked solid, your prices are too low. Raise prices for new clients first, then give existing clients 30 days notice.</p>
            <p>Keep the message short and confident. Thank them, state the new rate and the date it starts. Most good clients stay.</p>
          `,
          takeaways: ["Fully booked means underpriced", "Raise new client prices first", "Give 30 days notice to existing clients"],
        },
      ],
    },
    {
      title: "Getting Clients",
      summary: "Fill your calendar with recurring work",
      lessons: [
        {
          title: "Your Google Business Profile",
          duration: "8 min",
          body: `
            <p>For local service businesses, your Google Business Profile is often the first impression and the biggest source of free leads.</p>
            <ul>
              <li>Pick the right primary category and list every service</li>
              <li>Add real photos of your team and your work</li>
              <li>Ask every happy client for a review</li>
              <li>Respond to every review, good or bad</li>
            </ul>
          `,
          takeaways: ["Complete every field", "Reviews drive rankings", "Real photos beat stock photos"],
        },
        {
          title: "Building a referral engine",
          duration: "6 min",
          body: `
            <p>Happy clients are your best salespeople. Make referring you easy and worth their while.</p>
            <ol>
              <li>Ask at the moment they are happiest, right after a great clean.</li>
              <li>Offer a simple reward, like a discount on their next visit.</li>
              <li>Follow up with a text they can forward to a friend.</li>
            </ol>
          `,
          takeaways: ["Ask right after a great clean", "Keep rewards simple", "Make it easy to forward"],
        },
        {
          title: "Selling recurring plans",
          duration: "7 min",
          body: `
            <p>Recurring clients are the foundation of a stable cleaning business. They make revenue predictable and routes efficient.</p>
            <p>Present recurring service as the default option on every quote, with one time cleans priced higher.</p>
            <div class="callout"><span data-i="calendar"></span><div><b>Goal:</b> Aim for most of your revenue to come from weekly, biweekly and monthly clients.</div></div>
          `,
          takeaways: ["Lead with recurring options", "Price one time cleans higher", "Recurring revenue makes hiring possible"],
        },
        {
          title: "Following up on leads",
          duration: "5 min",
          body: `
            <p>Most leads do not book on the first message. A simple follow up routine can double your close rate.</p>
            <ul>
              <li>Same day: send the quote</li>
              <li>Day 2: friendly check in</li>
              <li>Day 5: last chance with an open booking slot</li>
            </ul>
          `,
          takeaways: ["Most leads need follow up", "Use a simple 3 touch routine", "Automate it where you can"],
          nudge: "crewty",
        },
      ],
    },
    {
      title: "Hiring and Training",
      summary: "Build a team you can trust",
      lessons: [
        {
          title: "When and how to make your first hire",
          duration: "9 min",
          body: `
            <p>Hire when you are consistently turning away work or working more hours than you can sustain. Hire for reliability and attitude; you can teach the cleaning.</p>
            <ol>
              <li>Write a clear job post with pay and schedule</li>
              <li>Do a short phone screen</li>
              <li>Run a paid working interview</li>
              <li>Run a background check before the first solo job</li>
            </ol>
          `,
          takeaways: ["Hire for reliability and attitude", "Use paid working interviews", "Always background check"],
        },
        {
          title: "Checklists and cleaning standards",
          duration: "7 min",
          body: `
            <p>Checklists are how quality stays the same when you are not in the room. Write one for every service type and room.</p>
            <p>Keep each checklist short, specific and in the order the work is done.</p>
          `,
          takeaways: ["One checklist per service type", "Write tasks in working order", "Review checklists with every new hire"],
        },
        {
          title: "Quality control",
          duration: "6 min",
          body: `
            <p>Spot check new team members often, then less as they prove themselves. Ask clients for quick feedback after each visit and fix issues within 24 hours.</p>
          `,
          takeaways: ["Spot check new hires often", "Collect feedback after every visit", "Fix issues within 24 hours"],
          nudge: "discord",
        },
      ],
    },
    {
      title: "Systems and Software",
      summary: "Run the business, not the busywork",
      lessons: [
        {
          title: "Why systems matter",
          duration: "6 min",
          body: `
            <p>Texts, sticky notes and spreadsheets work until about ten clients. After that, things slip: missed appointments, forgotten invoices and messy schedules.</p>
            <p>The owners who scale move everything into one system early: scheduling, client records, quotes, invoices and payments.</p>
          `,
          takeaways: ["Manual systems break around ten clients", "Put everything in one place", "Set it up before you need it"],
          nudge: "crewty",
        },
        {
          title: "Scheduling and dispatch with Crewty",
          duration: "10 min",
          body: `
            <p>Most owners in our community run their day in Crewty. Here is the setup they use.</p>
            <ol>
              <li>Add your services and default durations</li>
              <li>Import your clients with addresses and notes</li>
              <li>Set up recurring jobs for weekly, biweekly and monthly clients</li>
              <li>Invite your team so they see their schedule on their phone</li>
            </ol>
          `,
          takeaways: ["Set services and durations first", "Recurring jobs schedule themselves", "Your team sees jobs on their phone"],
          nudge: "crewty",
        },
        {
          title: "Invoicing and getting paid",
          duration: "7 min",
          body: `
            <p>Send invoices the same day the job is done and accept card payments online. Card on file for recurring clients removes chasing entirely.</p>
          `,
          takeaways: ["Invoice the same day", "Accept online payments", "Use card on file for recurring clients"],
          nudge: "crewty",
        },
      ],
    },
    {
      title: "Scaling Up",
      summary: "Grow without burning out",
      lessons: [
        {
          title: "Know your numbers",
          duration: "8 min",
          body: `
            <p>Track a few numbers every week: revenue, labor cost percentage, average job value, number of recurring clients and new leads.</p>
            <p>When one moves the wrong way, you will catch it early.</p>
          `,
          takeaways: ["Review numbers weekly", "Watch labor cost percentage", "Track recurring client count"],
        },
        {
          title: "Building teams and routes",
          duration: "7 min",
          body: `
            <p>Group clients by area and day to cut drive time. Pair a trained lead with a newer cleaner so quality stays high as you add teams.</p>
          `,
          takeaways: ["Group clients by area", "Pair leads with new hires", "Less drive time means more profit"],
        },
        {
          title: "Adding commercial work",
          duration: "8 min",
          body: `
            <p>Commercial contracts can fill evenings and weekends and smooth out revenue. Start small with offices and retail spaces close to your existing routes.</p>
            <div class="callout"><span data-i="users"></span><div><b>Next step:</b> Share your growth plan in the Discord and get feedback from owners who have already done it.</div></div>
          `,
          takeaways: ["Start with small offices", "Stay close to your routes", "Get feedback in the community"],
          nudge: "discord",
        },
      ],
    },
  ],
};
