---
layout: post
title: "Challenges and Failures of Pakistan's 2018 General Election Result Transmission System (RTS)"
categories: Politics
cover: https://www.tagesspiegel.de/berlin/images/wahlen-in-pakistan/alternates/BASE_21_9_W1000/wahlen-in-pakistan.jpeg
keywords: Pakistan general elections, Imran Khan, PTI, software failures, Result Transmission System, transparency, accountability, election credibility, third-party verification.
description: Explore the reasons behind the software failures in Pakistan's 2018 general elections and their impact on transparency, accountability, and election credibility. Learn about the Result Transmission System, the importance of third-party verification, and the need for accountability measures to restore public trust in the election process.
permalink: /blog/:title
---


On July 25 2018, one-fourth of Pakistan's total population (and [more than half of registered voters](https://tribune.com.pk/story/1767487/1-voter-turnout-stood-55-8-per-cent-says-ecp)) went to polls to mark the second ever peaceful democratic transition of power in Pakistan's 72-year history. Throughout the day, [54 million people](https://www.ecp.gov.pk/documents/genderaffairs/National%20Assembly.pdf) slowly trickled in and out of some 84 thousand polling stations across the country, stamping their choice of representatives in 272 Federal and 577 Provincial constituencies on secret ballot papers, until the clock struck six in the evening.

And then began the real test: counting the votes.


## Context and Problem Description

Pakistan had its last general elections in 2013, when the Election Commission of Pakistan (ECP) received a [record number of complaints](https://www.pakistantoday.com.pk/2013/05/16/rigging-in-election-2013-ecp-receives-152-applications-orders-recounting-in-9-constituencies/) against electoral fraud, and the country saw [many legal battles](https://www.dawn.com/news/1014699/recount-thumb-impression-verification-ordered-on-two-na-seven-pa-seats) and [street protests](https://www.wsj.com/articles/pakistan-supreme-court-issues-warning-as-protesters-march-on-capital-1408120922) in the aftermath. An [Inquiry Commission was formed in April 2015](http://www.na.gov.pk/uploads/documents/1429632373_316.pdf) to investigate the fraud allegations. It concluded that while there had not been any systematic rigging either against or in favor of any particular party, there were a large number of shortcomings and irregularities in the electoral process which made the election controversial.

One of the identified shortcoming was the insufficiently transparent consolidation process of votes counted at each polling station.

### Stakeholders in the Counting Process

It is important to understand the hierarchy of the electoral staff and their role in the counting process to understand the context.

ECP has a central headquarter in Islamabad, and four provincial headquarters in each of the four provinces.

#### District Returning Officers (DROs)

Right below the administrative tier of the election commission lie the District Returning Officers (DROs). The DROs are responsible for the election process in the entire district and report directly to the provincial commissioners. They receive results of each constituency in the district from the Returning Officers, and forward them.

#### Returning Officers (ROs)

Next in the hierarchy are the Returning Officers (ROs), who look after an area which usually comprises of one National Assembly and two Provincial Assembly seats. There are most often over a 100 polling stations in each constituency. An RO collects results of the count from each of these polling stations (sent by the Presiding Officers), sums them up and forwards them to DROs.

#### Presiding Officers (POs)

Each polling station is presided over by a Presiding Officer (PO) and aided by other polling staff. Their job is to organise a smooth polling process, ensuring that votes are cast only by registered voters and each voter casts their vote only once.

At the end of the day, the PO counts the votes, prepares a statement of the count for communication to the Returning Officer, affixes the same outside the polling station and also provides copies of the statement to a representative of each candidate.

### Counting and Consolidation in 2013

The Presiding Officer (PO) at each polling station was responsible for manually counting the votes polled there, with the help of other polling staff and in presence of a representative of each contesting candidate. The total for each candidate would then be written on the Statement of the Count (Form XIV, see figure below) and signed by the PO.

<figure class="wp-block-image size-large">
    <img src="https://pbs.twimg.com/media/BKpRENcCUAEeO_T?format=jpg&amp;name=large" alt="" />
    <figcaption><small>An image of Form XIV ("The Statement of the Count") shared by <a href="http://fafen.org">FAFEN</a> on <a href="https://twitter.com/_FAFEN/status/336170254956908544">Twitter</a></small></figcaption>
</figure>
<br>

This statement of count, along with other important forms (including Form XV ("Ballot Paper Account") which counts the number of used/unused ballots) and all polled ballot papers, were sealed in polling bags by the PO, and then physically transported to the RO who was responsible for this constituency.

After having received and verified provisional results from all polling stations in the area, the RO would prepare a consolidated statement of count for all constituencies (usually one National and two Provincial seats), and then again physically transport the results to the DRO. The DRO would collect results from all ROs in their district, and report them to the provincial commissioner, where the official results would finally be announced.


### Problems with the Existing Process

Physical transportation of the statement of the count caused delays in reporting election results, which provided space for rumors and allegations of mishandling and rigging to spread. There were also many security challenges linked to this process, such as restricting unauthorized access to the statements and ensuring that they were not manipulated in any way during transportation.

The law requires publication of these statements of vote count, but the ECP failed to make them public even after more than a year. The independent watchdog Free and Fair Election Network (FAFEN) [called on the ECP in September 2014](https://www.dawn.com/news/1131303/newspaper/column) to release these statements as soon as possible. About 90% of the Form XIV's had been published on the ECP's website by the time it was called to answer before the Inquiry Commission in 2015, a full two years after the elections. The ECP never managed to make the Form XV ("Ballot Count Account") public, and [investigations confirmed that about 35% of them were not in the polling bags](https://www.scribd.com/doc/272375113/Judicial-Commision-Report#from_embed) which the ROs received from the polling stations.

Several reasons were identified for these irregularities, one such being an inadequately trained election staff. Nonetheless, [this raised all kinds of questions on the integrity of the election](https://fafen.org/wp-content/uploads/2014/12/Key-Findings-May13.pdf) and resulted in prolonged protests, which [sometimes grew violent](https://www.dawn.com/news/1128786), [even resulting in some deaths](https://www.theguardian.com/world/2014/aug/31/islamabad-protests-violent-injured), and [caused a loss of billions of rupees to the economy](https://economictimes.indiatimes.com/news/international/world-news/protests-in-pakistan-caused-rs-547-billion-economic-losses-government/articleshow/42024367.cms).

All because of a failed vote counting system.


## The 2018 General Elections and the Introduction of New IT Systems

Learning from the mistakes in 2013, the Election Commission of Pakistan sought to bring more transparency to the vote counting and reporting process in the next elections. To achieve this, they introduced a number of new technologies with the primary goal of speeding up the election process and improving transparency.

Two main systems developed for this purpose were the Result Management System (RMS) and the Result Transmission System (RTS), which replaced some parts of the existing process and collaborated with each other to make result transmission, management and reporting faster, more secure and more transparent. These were developed jointly by the National Database &amp; Registration Authority (NADRA) and ECP.

### The Result Management System (RMS)

The Result Management System (RMS) was a form-based desktop application installed at the Returning Officer's (RO) office, which streamlined the time-consuming process of manually filling out forms for the 2018 General Elections. It allowed for quick and efficient data entry, including candidate names, number of registered voters, polling station names, and number of votes cast for each candidate. The RMS enabled electronic compilation of election results, making the process more transparent, verifiable, and auditable. This helped prevent tampering of results and minimized errors during data entry. The digital results were made publicly available on a website, allowing access to the statement of counts for all polling stations and consolidated results for each constituency, enabling the public to easily track the progress of the election results.

The RMS had three modules:

1. __Polling Scheme Module__:
The Polling Scheme module allowed Returning Officers (ROs) to finalize polling schemes with the assistance of data-entry operators (DEOs). This module enabled the entry of voting details for each polling station in the constituency and generated Form 28, which included fields for the identification and name of the polling station, the electoral area or block code, and the number of registered voters by gender, along with the number of booths for male and female voters.

2. __Contesting Candidate Module__:
The Contesting Candidate enabled the quick and efficient entry of the names of candidates, their affiliated party, and their respective election symbols. It output Form 33, which contained details of the contesting candidates. The Contesting Candidate Module was designed to speed up data entry on the night of the election, making the process of consolidating and verifying election results quicker and more accurate.

3. __Result Management Module__:
The Result Management Module was the most critical module of the Result Management System (RMS) and was exclusively used on the day of the actual election. This module was responsible for managing and consolidating the election results received from the Presiding Officers (POs) at each polling station. The Returning Officers (ROs) received Form 45, which contained the vote count for each candidate at a particular polling station, from the POs.

Once the ROs received the Form 45, the Data Entry Operators (DEOs) entered this data into the RMS system, which already had the polling schemes and candidate details entered from the other modules. The system then generated three critical forms: Form 47, which included draft consolidated results for each candidate; Form 48, which presented polling station-wise results summarized in a single table, and Form 49, which provided the final consolidated results for that constituency.

The Result Management Module was designed to expedite the process of consolidating election results and minimize the risk of human error. This module enabled ROs to quickly receive, securely transmit and process election results and release the outcome promptly, promoting transparency and public confidence in the election process. The results were securely transmitted from the ROs' desktop application to the Election Commission of Pakistan's (ECP) main server, and eventually published on the ECP website, [making them accessible to the public](https://drive.google.com/drive/folders/1cyPM-MUkP8-Sj6cxW-WHHwp60Pq3Hj27).


### The Result Transmission System (RTS)

The Result Transmission System (RTS) was a mobile app used by Presiding Officers overseeing each polling station to electronically transmit the vote count to the Election Commission of Pakistan (ECP) for consolidation. To use RTS, the POs manually filled out Form 45, containing polling station results, and entered the number of votes for each candidate into the app before sending the data to the Returning Officers (ROs) through the app. The ROs received this data in their RMS system and used it to create provisional consolidated results (Form 47). Meanwhile, the POs also sent a hard copy of Form 45 to the RO physically. The app's functionality helped the ROs to begin the consolidation process while waiting for the hard copy of Form 45 to arrive physically, and also helped to reduce the risk of data entry errors. Once the hard copy of the form arrived, the ROs could quickly validate the data entered in the app and use it to create provisional consolidated results. Finally, the ROs used the RMS system to send the final consolidated results (Form 49) to the ECP, which provided a secure and reliable way of transmitting election results.


### Pilot Experiments

The ECP lists [two pilot experiments on its website](https://www.ecp.gov.pk/frmGenericPage.aspx?PageID=3083) which were carried out in 2017 prior to the deployment of the RTS in the 2018 general elections. However, reports suggest there were two more tests, and at least some version of the system was under development and tested as early as 2015.

|     | **PP-16 Attock-II**<br>(October 16, 2015) | **PS-114 Karachi-XXVI**<br>(July 9, 2017) | **NA-4 Peshawar-IV**<br>(October 26, 2017) | **PP-20 Chakwal-I**<br>(January 9, 2018) |
| ---: | :---: | :---: | :---: | :---: |
| **Location** | Punjab | Sindh | KPK | Punjab |
| **Candidates** | ? | 27 | ? | 5 |
| **Polling Stations** | 61 | 92 | 269 | 227 |
| **Data Types** | 📷 🚩 🕤 | ? | ? | ? |
| **Acquisition Device** | Smartphone | "Special electronic devices" | ? | ? |
| **Operating System** | Android | ? | ? | ? |
| **Provision of Devices** | ✅ | ✅ | ? | ? |    
| **User Training** | ✅ | ✅ | ✅ | At least some POs were not trained, if not all |
| **Destination** | ECP Central Server | ? | ? | ? |

<small>**Table 1:** Pilot experiments of the RTS in 2015-2017. (**Key:** 📷 = Photo, 🚩 = GPS, 🕤 = Time, ✅ = Yes, ❌ = No, ? = Unknown)</small>

## Analysis

From a software engineering perspective, the Result Transmission System (RTS) faced several challenges that could have contributed to its unresponsiveness on election night. One significant difference between the RTS and the Result Management System (RMS) was the scale of the system. The RMS was only used at the 272 RO offices, while the RTS was used at 84,000 polling stations across the country. This meant that the RTS had a much greater scalability requirement than the RMS, and any issues with scaling the system could have led to its unresponsiveness.

During the pilot tests, the ECP trained some staff on how to use the RTS app, but on election night, it was impossible to train all of the POs using the app. This lack of training, coupled with the fact that the POs were not specifically trained and were using their own smartphones, could have led to problems with using the app, which could have contributed to the system's unresponsiveness.

The RTS app was designed to be used on mobile devices, which can have different hardware and software configurations. This could have led to compatibility issues and other technical problems that could have contributed to the system's unresponsiveness. Furthermore, the lack of proper internet connectivity in many regions across the country could have slowed down the transmission of data, leading to a backlog of results and potential network failures.

Each PO had to transfer three pictures through the RTS app, one for the National Assembly constituency and two for the Provincial Assembly constituencies. Therefore, the total number of photos to be transferred was 252,000 (84,000 polling stations x 3 photos per polling station). Assuming an average photo size of 12 MP, the total amount of data to be transferred through the RTS app would be around 0.91 TB (252,000 photos x 3.6 MB per photo). This would require a significant amount of bandwidth, especially when 84,000 devices were trying to connect to the same servers simultaneously, which could have caused the servers to become unresponsive or crash if not properly managed.

The use of personal smartphones by the POs also presented a security risk. Unlike the desktop computers used by the ROs for the RMS, the smartphones used by the POs may not have had the same level of security measures in place. This could have made the system vulnerable to hacking or other types of cyber attacks, which could have contributed to the system's unresponsiveness.

## Conclusion

Pakistan's democratic system is still in its early stages of development, with transparency in the Election Commission of Pakistan's (ECP) working being a major factor contributing to its slow growth. The lack of transparency was evident in the development, testing, and deployment processes surrounding the Result Management System (RMS) and Results Transmission System (RTS), with minimal data made public by the ECP. The absence of transparency in the software development process, coupled with a lack of information on the software's design, implementation, and testing procedures, has left many questions unanswered.

The RTS faced several challenges related to scalability, compatibility, connectivity, and security. These challenges, combined with the lack of training for many of the POs, the use of personal smartphones, and the significant amount of data to be transferred, could have contributed to the system's unresponsiveness on election night. To prevent similar issues in the future, it would be essential to address these challenges and develop appropriate measures to ensure the smooth functioning of the RTS.

Furthermore, the pilot tests of the software were conducted on a much smaller scale than the actual country-wide election. When the software failed to scale, there were no contingency plans in place to handle the situation, which led to all sorts of wild speculations and rumors about army interference and result manipulation to break out. These rumors were also fueled by Pakistan's past experiences, where the establishment has always tried to meddle in civilian matters.

The lack of transparency and accountability in the entire process only added to the confusion and mistrust in the election system, causing significant damage to the credibility of the election results. There was no clear ownership of the projects, and no one was held responsible for the failure of the software on election night. The absence of accountability measures not only undermines public trust in the election process but also makes it difficult to identify and correct the mistakes made.

Therefore, it is imperative that the Election Commission of Pakistan takes necessary steps to ensure that proper accountability mechanisms are put in place, and any future software development and deployment is done transparently, with the involvement of independent third-party experts. Only then can the public have confidence in the integrity of the election process.

## References

<ol id="cit-1">
    <li>FAFEN. (2015, October 16). Number of voters increases in PP-16 Attock II. <em>FAFEN News Alert: A Fortnightly Newsletter</em>, <em>1(6)</em>, 2. Retrieved November 8, 2020, from https://fafen.org/wp-content/uploads/2015/10/FAFEN-News-Alerts-Issue-6.pdf</li>
    <li>FAFEN. (2017, July 9). <em>By-Election Observation Report PS-114 Karachi-XXVI</em> (Rep.). Retrieved November 8, 2020, from https://fafen.org/wp-content/uploads/2017/07/By-Election-Report-PS-114.pdf</li>
    <li>FAFEN. (2017, October 26). <em>Pre-Election Report NA-4 Peshawar-IV By-Election</em> (Rep.). Retrieved November 8, 2020, from https://fafen.org/wp-content/uploads/2017/10/06-NA-4-By-Election.pdf</li>
    <li>FAFEN. (2018, January 9). <em>By-Election Observation Report PP-20 Chakwal-I</em> (Rep.). Retrieved November 8, 2020, from https://fafen.org/wp-content/uploads/2018/01/By-Election-Report-PP-20.pdf</li>
</ol>