import { createI18n } from "vue-i18n";

const messages = {
  en: {
    english: "English",
    dashboard: "Dashboard",
    grievance: "Grievance",
    manage: "Manage",
    manageGrievance: "Manage Grievance",
    manageAppeal: "Manage Appeal",
    listOfGrievance: "List of Grievance",
    newGrievance: "New Grievance",
    userManual: "User Manual",
    userManualDes: "Online grievance / appeal submission and next procedure procedure",
    loginPageMessage: "To submit a grievance, login using your mobile number and the pin number sent to your mobile",
    complainantLogin: "Complainant Login",
    mobileNumber: "Mobile Number",
    pinCode: "Pin Code",
    retrievePinCode: "Retrieve Pin Code",
    login: "Login",
    newAccount: "New Account",
    technicalCooperation: "Technical Cooperation",
    plannedAndBroughtBy: "Planned and Brought By",
    pleaseWait: "Please wait",
    trackingNumber: "Tracking Number",
    grievanceSubject: "Grievance Subject",
    grievanceDate: "Grievance Date",
    relatedService: "Related Service",
    grievanceType: "Grievance Type",
    grievanceCurrentStatus: "Grievance Current Status",
    possibleCloseDate: "Possible close date",
    myGovLogin: "MyGov Login",
    complaintLogin: "Complainant Login",
    administrativeLogin: "Administrative login",
    homePageDescription: "Welcome to the online platform of Central Grievance Remedies of the Government of the People's Republic of Bangladesh. You can report your dissatisfaction or opinion about the government service and the promised service of the underwriters/agencies, service delivery methods and the quality of services or products through this website. After submitting the complaint, the latest status of complaint remedies will be communicated through SMS and e-mail. You can also know about update information by logging in. However, if you file a complaint as anonymity, you will not get any further information about the complaint. To know more about it",
    plzClickHere: "please click here",
    grsMail: "grs@cabinet.gov.bd",
    frqAskQns: "Frequently Asked Questions",
    frqAskQnsDes: "Questions and answers regarding filing complaints and remedies",
    Feedback: "Feedback",
    FeedbackDes: "You can report your response (satisfaction/dissatisfaction) to the submission of the complaint filed",
    reqForAppeal: "Request for appeal",
    reqForAppealDes: "If the complaint is dissatisfied with the decision of the grievance redress officer, you can file an appeal",
    suggForImprovement: "Suggestions for improvement",
    suggForImprovementDes: "You can advise on the quality of services, improve service, improve the law / regulation, etc.",
    processMap: "Process map",
    processMapDes: "Process flow of grievance redress action procedure",
    citizenCharter: "Citizen Charter",
    citizenCharterDes: "List of services of government departments and offices under the jurisdiction (Citizen's Charter) ",
    download: "Download",
    downloadsDes: "Download the necessary forms for submitting grievance",
    grsGuideline: "GRS Guideline",
    grsGuidelineDes: "Grievance Redress System guideline - Instructions 2015 (Amendments 2018)",
    contact: "Contact",
    contactDes: "If you have any technical difficulties in online complaint remedies, you can contact",
    importantInfo: "Important Info",
    overallCollaboration: "Overall Collaboration",
    importantLinks: "Important Links",
    bangladeshPortal: "Bangladesh Portal",
    cabinetDivision: "Cabinet Division",
    a2iProgram: "a2i Program",
    onlineForms: "Online Forms",
    socialMedia: "Social Media",
    plannedAndBroughtByDes1: "Copyright © 2017 All Rights Reserved by Cabinet Division",
    plannedAndBroughtByDes2: "Government of the People's Republic of Bangladesh",
    grievanceSubmissionForm: "Public Grievance Submission Form",
    chooseOfficeFromList: "Choose an office from the list below",
    // subjectOfGrievance: "Subject of the grievance",
    description: "Description",
    grievanceRelatedProofs: "Grievance related proofs",
    ifAny: "if any",
    fileSizeMessage: "Maximum file size  10  MB and allowed file types are",
    addFiles: "Add files",
    viewPreview: "View Preview",
    sendYourGrievance: "Send your grievance",
    or: "Or",
    selectOfficeType: "Select Office Type",
    TypeHereSearchOffice: "Type here to search office",
    submit: "Submit",
    previousPage: "Previous Page",
    penRetrieveMsg: "To reset your Pin Code, please enter your Mobile number",
    logOut: "Logout",
    myPanel: "My Panel",
    trackingNo: "Enter Your Tracking No",
    trackGrivence: "Track Grievance",
    trackingSummary: "Tracking Summary",
    pleaseSelect: "Please Select",
    complainantsInfo: "Complainant's Info",
    fullName: "Full Name",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    selectGender: "Please Select Gender",
    occupation: "Occupation",
    chooseYourOccupation: "Choose Your Occupation",
    academicQualification: "Academic Qualification",
    chooseYourEducationLevel: "Choose Your Education level",
    nationalID: "National ID",
    birthCertificateNumber: "Birth Certificate Number",
    passportNumber: "Passport Number",
    email: "Email",
    country: "Country",
    nationality: "Nationality",
    address: "Address",
    register: "Register",
    nidRequired: "National ID must be either 10, 13 or 17 digits",
    bcnRequired: "Birth certificate number must be 17 digits",
    passpordRequired: "Passport number must be 9 characters",
    action: "Action",
    fromComplainant: "",
    details: "Details",
    date: "Date",
    to: "To",
    officer: "Grievance Redress Officer",
    subject: "Subject",
    toWhom: "Mr./Ms.",
    yourFaithful: "Faithfully yours",
    attachment: "Attachment",
    status: "Status",
    fileName: "File Name",
    fileType: "File Type",
    filePreview: "File Preview Link",
    fileDownload: "File Download Link",
    fileAttachment: "File attachment",
    guideline: "Guideline",
    attachFileHistory: "Attached file list in history",
    attachFileList: "Complaint attached file list ",
    history: "History",
    goBackToList: "Go Back To List",
    rateUs: "Rate Us",
    appeal: "Appeal",
    detailsTitle: "DETAILS OF GRIEVANCE",
    grievancePreviewTitle: "Please confirm provided information",
    rateUsYourComment: "Your Comments",
    send: "Send",
    rating: "Rating",
    notRated: "Not Rated",
    yourFeedback: "Your Feedback",
    withoutLoginGrievancePageMsg: "*Grievance will be anonymous if phone number or username is not given, and you will not be able to track",
    staffGrievance: "Staff Grievance",
    grievanceUpload: "Grievance Upload",
    selfMotivatedgrievance: "Self Motivated Grievance",
    listOfComplaintsYouHaveFiled: "List of complaints you have filed",
    grievancesSubmittedByYou: "Grievances Submitted By You",
    officialGrievance: "Official Grievance",
    blackList: "Black List",
    blackListRequests: "Black List Requests",
    admistrativeGrievanceTitle: "MANAGE GRIEVANCE",
    incoming: "Incoming",
    sent: "Sent",
    resolved: "Resolved",
    sentToAnotherOffice: "Sent To Another Office",
    timePassed: "Time Passed",
    copy: "Copy",
    officerInCharge: "Officer-in-Charge (Designation)",
    serviceDate: "Service date",
    NameOfService: "Name of service",
    detailsOfService: "Details of Service",
    permanentAddress: "Permanent address",
    previousGrievanceList: "Submitted Grievances of Complainant",
    caseNumber: "Case Number",
    noDataFound: "No data found",
    provideDetailsOfAttachedFile: "Provide details of the attached file",
    fileTooLarge: "The file is too large",
    fileTypeNotAllowed: "File type not allowed",
    untitledFile: "Untitled File",
    takeAction: "Take Action",
    forwardToServiceOfficerInSelfOffice: "Forward to Service Officer in self office",
    forwardToAnotherOffice: "Forward to Another Office",
    forwardToSubordinateOffice: "Forward to Subordinate Office",
    sendToAppealOfficer: "Send to Appeal Officer",
    forwardToSubordinateOfficesGRO: "Forward to Subordinate Office's GRO",
    reject: "Reject",
    sendForOpinion: "Send For Opinion",
    lastDateToSendOpinion: "Last date to send opinion",
    note: "Note",
    selectedOfficer: "Selected Officer",
    selectedOfficerMessage: "Select the person you want to send feedback to as the principal recipient, others will be copied as usual.",
    designation: "Designation",
    name: "Name",
    principalRecipient: "Principal Recipient",
    copyRecipient: "Copy Recipient",
    selectDesignation: "Select Designation",
    previouslyAddedFiles: "Previously Added Files",
    noAttachmentsFound: "No attachments found",
    cancel: "Cancel",
    noAttachFile: "There are no file attachments",
    allgrievanceTitle: "Submitted Grievances of Complainant",
    doBlacklist: "Blacklist",
    blacklistReason: "Black List Reason",
    gro: "GRO",
    blacklist: "blacklist",
    rievanceRedressalManagement: "Grievance Redressal Management",
    anotherOfficeSendNote: "The complaint received is from the service provided by your office, as per the Guidance Remarks Guidelines 2015 (Revised 2018), the next necessary action has been sent.",
    selectServiceCommitment: "Select Service Commitment",
    serviceSelectAlert: "If no service is selected the complaint will be sent as Other",
    nameOfOtherServices: "Name of other services",
  },
  bn: {
    english: "বাংলা",
    dashboard: "ড্যাশবোর্ড",
    grievance: "অভিযোগ",
    manage: "ব্যবস্থাপনা",
    manageGrievance: "অভিযোগ ব্যবস্থাপনা",
    manageAppeal: "আপিল ব্যবস্থাপনা",
    listOfGrievance: "অভিযোগ তালিকা",
    newGrievance: "নতুন অভিযোগ",
    userManual: "ব্যবহারকারী নির্দেশিকা",
    loginPageMessage: "আপনার মোবাইল নম্বর ও SMS এ আসা পিন নম্বর দিয়ে লগইন করে অভিযোগ দাখিল করুন",
    complainantLogin: "অভিযোগকারী লগইন",
    mobileNumber: "মোবাইল নম্বর",
    pinCode: "পিনকোড",
    retrievePinCode: "পিনকোড উদ্ধার",
    login: "লগইন",
    newAccount: "নতুন অ্যাকাউন্ট",
    technicalCooperation: "কারিগরি সহযোগিতায়",
    plannedAndBroughtBy: "পরিকল্পনা ও বাস্তবায়নে",
    pleaseWait: "অনুগ্রহপূর্বক অপেক্ষা করুন",
    trackingNumber: "ট্র্যাকিং নম্বর",
    grievanceSubject: "অভিযোগের বিষয়",
    grievanceDate: "অভিযোগের তারিখ",
    relatedService: "সংশ্লিষ্ট সেবা",
    grievanceType: "অভিযোগের ধরন",
    grievanceCurrentStatus: "সর্বশেষ অবস্থা",
    possibleCloseDate: "নিষ্পত্তির সম্ভাব্য তারিখ",
    myGovLogin: "আমার সরকার লগইন",
    administrativeLogin: "প্রশাসনিক লগইন",
    homePageDescription: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের কেন্দ্রীয় অভিযোগ প্রতিকার ব্যবস্থার অনলাইন প্ল্যাটফর্মে আপনাকে স্বাগতম। সরকারি দপ্তর এবং আওতাধীন দপ্তর/সংস্থার প্রতিশ্রুত সেবা, সেবা প্রদান পদ্ধতি এবং সেবা অথবা পণ্যের মান সম্পর্কে আপনার অসন্তোষ বা মতামত এই ওয়েবসাইটের মাধ্যমে জানাতে পারেন। অভিযোগ দাখিল করার পর SMS ও ই-মেইলের মাধ্যমে অভিযোগ প্রতিকারের সর্বশেষ অবস্থা সম্পর্কে জানানো হবে। এ ছাড়া লগইন করেও হালনাগাদ তথ্য জানা যাবে। তবে অজ্ঞাতনামা হিসেবে অভিযোগ দাখিল করলে অভিযোগ সম্পর্কে পরবর্তী কোনো তথ্য পাওয়া যাবে না। অভিযোগ দাখিলের পদ্ধতি সম্পর্কে বিস্তারিত জানতে",
    plzClickHere: "এখানে ক্লিক করুন",
    grsMail: "grs@cabinet.gov.bd",
    frqAskQns: "সচরাচর জিজ্ঞাস্য",
    frqAskQnsDes: "অভিযোগ দাখিল ও প্রতিকার-সম্পর্কিত প্রশ্নোত্তর",
    Feedback: "অভিযোগ নিষ্পত্তিতে প্রতিক্রিয়া",
    FeedbackDes: "দাখিলকৃত অভিযোগ নিষ্পত্তিতে আপনার প্রতিক্রিয়া (সন্তুষ্টি/অসন্তুষ্টি) জানাতে পারেন",
    reqForAppeal: "আপিল করুন",
    reqForAppealDes: "অভিযোগ নিষ্পত্তি কর্মকর্তার সিদ্ধান্তে অসন্তুষ্ট হলে আপিল দাখিল করতে পারেন",
    suggForImprovement: "সেবার মানোন্নয়নে পরামর্শ",
    suggForImprovementDes: "সেবার গুণগত মান বৃদ্ধি, সেবা সহজিকরণ, সংশ্লিষ্ট আইন/বিধি সংস্কার ইত্যাদি বিষয়ে আপনার পরামর্শ জানাতে পারেন",
    processMap: "পদ্ধতি-চিত্র",
    processMapDes: "অভিযোগ প্রতিকারের কার্যপদ্ধতির প্রবাহ চিত্র",
    citizenCharter: "সেবা প্রদান প্রতিশ্রুতি",
    citizenCharterDes: "সরকারি দপ্তর ও আওতাধীন দপ্তরের সেবার তালিকা",
    downloads: "ডাউনলোড",
    downloadsDes: "অফলাইনে অভিযোগ দাখিলের জন্য প্রয়োজনীয় ফরমস ডাউনলোড",
    grsGuideline: "জিআরএস নির্দেশিকা",
    grsGuidelineDes: "অভিযোগ প্রতিকার ব্যবস্থা-সংক্রান্ত নির্দেশিকা ২০১৫ (পরিমার্জিত ২০১৮)",
    contact: "যোগাযোগ",
    contactDes: "অনলাইন অভিযোগ প্রতিকার ব্যবস্থায় কোনো টেকনিক্যাল সমস্যার সম্মুখীন হলে যোগাযোগ",
    importantInfo: "গুরুত্বপূর্ণ তথ্য",
    overallCollaboration: "সার্বিক সহযোগিতায়",
    importantLinks: "গুরুত্বপূর্ণ লিঙ্ক",
    bangladeshPortal: "জাতীয় তথ্য বাতায়ন",
    cabinetDivision: "মন্ত্রিপরিষদ বিভাগ",
    a2iProgram: "এটুআই",
    onlineForms: "অনলাইন আবেদনপত্র",
    socialMedia: "সামাজিক যোগাযোগ",
    plannedAndBroughtByDes1:"স্বর্বসত্ত্ব © ২০১৭ মন্ত্রিপরিষদ বিভাগ",
    plannedAndBroughtByDes2:"গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
    userManualDes: "অনলাইনে অভিযোগ/আপিল দাখিল এবং পরবর্তী কার্যক্রমের পদ্ধতি",
    grievanceSubmissionForm: "নাগরিক অভিযোগ দাখিল ফরম",
    chooseOfficeFromList: "যে দপ্তরে অভিযোগ করতে চান সেটি নির্বাচন করুন",
    // subjectOfGrievance: "অভিযোগের বিষয়",
    description: "অভিযোগের বিবরণ",
    grievanceRelatedProofs: "অভিযোগ সংক্রান্ত প্রমাণাদি",
    ifAny: "যদি থাকে",
    fileSizeMessage: "ফাইলের সর্বোচ্চ সাইজ  ১০  মেগাবাইট(MB) এবং ফাইলের অনুমোদিত টাইপ সমূহ",
    addFiles: "ফাইল যুক্ত করুন",
    viewPreview: "প্রিভিউ দেখুন",
    sendYourGrievance: "অভিযোগ প্রেরণ",
    or: "অথবা",
    selectOfficeType: "দপ্তরের ধরন বাছাই করুন",
    TypeHereSearchOffice: "দপ্তর খুঁজতে এখানে টাইপ করুন",
    submit: "সাবমিট",
    previousPage: "আগের পেজ",
    penRetrieveMsg: "পিনকোড রিসেট করতে নিচে আপনার মোবাইল নম্বরটি দিন",
    logOut: "বাহির",
    myPanel: "আমার প্যানেল",
    trackingNo: "আপনার ট্র্যাকিং নম্বর দিন",
    trackGrivence: "ট্র্যাক গ্রিভেন্স",
    trackingSummary: "ট্র্যাকিং সারাংশ",
    pleaseSelect: "বাছাই করুন",
    complainantsInfo: "অভিযোগকারীর তথ্য",
    fullName: "পূর্ণ নাম",
    dateOfBirth: "জন্ম-তারিখ",
    gender: "জেন্ডার",
    selectGender: "জেন্ডার বাছাই করুন",
    occupation: "পেশা",
    chooseYourOccupation: "পেশা বাছাই করুন",
    academicQualification: "শিক্ষাগত যোগ্যতা",
    chooseYourEducationLevel: "শিক্ষাগত যোগ্যতা বাছাই করুন",
    nationalID: "জাতীয় পরিচয়পত্র নম্বর",
    birthCertificateNumber: "জন্মনিবন্ধন সনদ নম্বর",
    passportNumber: "পাসপোর্ট নম্বর",
    email: "ই-মেইল",
    country: "দেশ",
    nationality: "জাতীয়তা",
    address: "ঠিকানা",
    register: "নিবন্ধন",
    fieldIsRequired: "প্রয়োজন",
    nidRequired: "জাতীয় পরিচয়পত্র নম্বর ১০, ১৩ অথবা ১৭ অংকের সংখ্যা হতে হবে",
    bcnRequired: "জন্মনিবন্ধন সনদ নম্বর ১৭ অংকের সংখ্যা হতে হবে",
    passpordRequired: "পাসপোর্ট নম্বর ৯ অক্ষর হতে হবে",
    action: "পদক্ষেপ",
    fromComplainant: "অভিযোগকারী কর্তৃক",
    details: "বিস্তারিত",
    date: "তারিখ",
    to: "বরাবর",
    officer: "অভিযোগ নিষ্পত্তি কর্মকর্তা",
    subject: "বিষয়",
    toWhom: "মহোদয়",
    yourFaithful: "আপনার বিশ্বস্ত",
    attachment: "সংযুক্তিসমূহ",
    status: "অবস্থা",
    fileName: "ফাইলের নাম",
    fileType: "ফাইলের ধরন",
    filePreview: "ফাইলের প্রিভিউ লিংক",
    fileDownload: "ফাইলের ডাউনলোড লিংক",
    fileAttachment: "ফাইল সংযুক্তি",
    guideline: "নির্দেশিকা",
    attachFileHistory: "গৃহীত কার্যক্রমের সংযুক্তি",
    attachFileList: "অভিযোগের সংযুক্তি",
    history: "গৃহীত কার্যক্রম",
    goBackToList: "তালিকায় ফিরুন",
    rateUs: "মতামত দিন",
    appeal: " আপিল করুন",
    detailsTitle: "অভিযোগের বিস্তারিত তথ্য",
    grievancePreviewTitle: "আপনার প্রদত্ত তথ্য নিশ্চিত করুন",
    rateUsYourComment: "আপনার মন্তব্য",
    send: "পাঠান",
    rating: "রেটিং",
    notRated: "রেট করা হয়নি",
    yourFeedback: "আপনার প্রতিক্রিয়া",
    withoutLoginGrievancePageMsg: "*মোবাইল নাম্বার এবং পূর্ণ নাম প্রদান না করলে অভিযোগটি অজ্ঞাতনামা হিসাবে বিবেচিত হবে এবং আপনি পরবর্তীতে অভিযোগটি ট্র্যাক করতে পারবেন না",
    staffGrievance: "কর্মকর্তা-কর্মচারী অভিযোগ",
    grievanceUpload: "অভিযোগ আপলোড",
    selfMotivatedgrievance: "স্বপ্রণোদিত অভিযোগ",
    listOfComplaintsYouHaveFiled: "আপনার দাখিলকৃত অভিযোগের তালিকা",
    grievancesSubmittedByYou: "আপনার দাখিলকৃত অভিযোগসমূহ",
    officialGrievance: "দাপ্তরিক-অভিযোগ",
    blackList: "কালো-তালিকা",
    blackListRequests: "কালো তালিকার অনুরোধ সমূহ",
    admistrativeGrievanceTitle: "অভিযোগ ব্যবস্থাপনা",
    incoming: "আগত",
    sent: "প্রেরিত",
    resolved: "নিষ্পত্তিকৃত",
    sentToAnotherOffice: "অন্য দপ্তরে প্রেরিত",
    timePassed: "সময় অতিক্রান্ত",
    copy: "অনুলিপি ",
    officerInCharge: "দায়িত্বপ্রাপ্ত কর্মকর্তা (পদবি)",
    serviceDate: "সেবার আবেদনের তারিখ",
    detailsOfService: "সেবার বিবরণ",
    NameOfService: "সংশ্লিষ্ট সেবার নাম",
    permanentAddress: "স্থায়ী ঠিকানা",
    previousGrievanceList: "ইতিপূর্বে দায়েরকৃত অভিযোগসমূহ",
    caseNumber: "কেস নম্বর",
    noDataFound: "কোন তথ্য পাওয়া যায়নি",
    provideDetailsOfAttachedFile: "সংযুক্ত ফাইল এর বিবরণ দিন",
    fileTooLarge: "ফাইল খুব বড়",
    fileTypeNotAllowed: "ফাইলের ধরন অনুমোদিত নয়",
    untitledFile: "শিরোনামহীন ফাইল",
    takeAction: "পদক্ষেপ গ্রহণ",
    forwardToServiceOfficerInSelfOffice: "মতামতের জন্য নিজ দপ্তরে প্রেরণ",
    forwardToAnotherOffice: "অন্য দপ্তরে প্রেরণ",
    forwardToSubordinateOffice: "আওতাধীন দপ্তরে প্রেরণ",
    sendToAppealOfficer: "আপিল অফিসারের নিকট প্রেরণ",
    forwardToSubordinateOfficesGRO: "মতামতের জন্য আওতাধীন দপ্তরে প্রেরণ",
    reject: "নথিজাত",
    sendForOpinion: "মতামতের জন্য প্রেরণ",
    lastDateToSendOpinion: "মতামত প্রেরণের শেষ তারিখ",
    note: "নোট",
    selectedOfficer: "বাছাইকৃত কর্মকর্তা",
    selectedOfficerMessage: "যে ব্যক্তিকে মতামতের জন্য প্রেরণ করতে চাচ্ছেন তাকে প্রধান প্রাপক হিসেবে সিলেক্ট করুন, অন্যরা যথারীতি অনুলিপিতে প্রেরিত হবে",
    designation: "পদ",
    name: "নাম",
    principalRecipient: "প্রধান প্রাপক",
    copyRecipient: "অনুলিপি প্রাপক",
    selectDesignation: "পদ বাছাই করুন",
    previouslyAddedFiles: "ইতঃপূর্বের সংযুক্তিসমূহ",
    noAttachmentsFound: "কোন সংযুক্তি পাওয়া যায়নি",
    cancel: "বাতিল",
    noAttachFile: "কোন ফাইল সংযুক্তি নেই",
    allgrievanceTitle: "ইতিপূর্বে দায়েরকৃত অভিযোগসমূহ",
    doBlacklist: "কালো-তালিকাভুক্ত করুন",
    blacklistReason: "কালো তালিকায় যোগ করার কারণ",
    gro: "অনিক",
    blacklist: "কালো-তালিকা",
    rievanceRedressalManagement: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
    anotherOfficeSendNote: "প্রাপ্ত অভিযোগটি আপনার দপ্তর থেকে প্রদত্ত সেবা-সংক্রান্ত হওয়ায় অভিযোগ প্রতিকার ব্যবস্থা-সংক্রান্ত নির্দেশিকা ২০১৫ (পরিমার্জিত ২০১৮) অনুসারে পরবর্তী প্রয়োজনীয় ব্যবস্থা গ্রহণের জন্য প্রেরণ করা হলো।",
    selectServiceCommitment: "সেবা প্রদান প্রতিশ্রুতি সিলেক্ট করুন",
    serviceSelectAlert: "কোনো সেবা বাছাই না করলে অভিযোগটি অন্যান্য হিসেবে প্রেরণ করা হবে",
    nameOfOtherServices: "অন্যান্য সেবার নাম",
    
  },
  es: {
    dashboard: "Tablero",
    layoutBuilder: "Constructor de maquetación",
    craft: "Elaborado",
    pages: "Paginas",
    profile: "Perfil",
    profileOverview: "Descripción general",
    projects: "Proyectos",
    campaigns: "Campañas",
    documents: "Documentos",
    connections: "Conexiones",
    wizards: "Magos",
    horizontal: "Horizontal",
    vertical: "Vertical",
    account: "Cuenta",
    accountOverview: "Descripción general",
    settings: "Ajustes",
    authentication: "Autenticación",
    basicFlow: "Flujo básico",
    signIn: "Registrarse",
    signUp: "Inscribirse",
    passwordReset: "Restablecimiento de contraseña",
    multiStepSignUp: "Regístrese Multi-Pasos",
    error404: "Error 404",
    error500: "Error 500",
    apps: "Aplicaciones",
    chat: "Chat",
    privateChat: "Chat privado",
    groupChat: "Grupo de chat",
    drawerChat: "Chat del cajón",
    widgets: "Widgets",
    widgetsLists: "Liza",
    widgetsStatistics: "Estadísticas",
    widgetsCharts: "Gráficos",
    widgetsMixed: "Mezclada",
    widgetsTables: "Mesas",
    widgetsFeeds: "Alimenta",
    changelog: "Registro de cambios",
    docsAndComponents: "Documentos & Componentes",
    megaMenu: "Mega menú",
    exampleLink: "Enlace de ejemplo",
    modals: "Modales",
    general: "General",
    inviteFriends: "Invitar A Amigos",
    viewUsers: "Ver Usuarios",
    upgradePlan: "Plan De Actualización",
    shareAndEarn: "Compartir Y Ganar",
    forms: "Formas",
    newTarget: "Nuevo Objetivo",
    newCard: "Nueva Tarjeta",
    newAddress: "Nueva Direccion",
    createAPIKey: "Crea Clave De Api",
    twoFactorAuth: "Dos Factores",
    createApp: "Crear Aplicacion",
    createAccount: "Crear Una Cuenta",
    activity: "Actividad",
    documentation: "Documentación",
    components: "Componentes",
    resources: "Recursos",
    customers: "Clientes",
    gettingStarted: "Empezando",
    customersListing: "Listado De Clientes",
    customerDetails: "Detalles De Los Clientes",
    calendarApp: "Calendario",
    subscriptions: "Suscripciones",
    getStarted: "Empezando",
    subscriptionList: "Lista De Suscripción",
    addSubscription: "Añadir Suscripción",
    viewSubscription: "Suscripción",
  },
  de: {
    dashboard: "Instrumententafel",
    layoutBuilder: "Layout-Builder",
    craft: "Hergestellt",
    pages: "Seiten",
    profile: "Profil",
    profileOverview: "Überblick",
    projects: "Projekte",
    campaigns: "Kampagnen",
    documents: "Unterlagen",
    connections: "Anschlüsse",
    wizards: "Zauberer",
    horizontal: "Horizontal",
    vertical: "Vertikal",
    account: "Konto",
    accountOverview: "Überblick",
    settings: "Die Einstellungen",
    authentication: "Authentifizierung",
    basicFlow: "Grundfluss",
    signIn: "Einloggen",
    signUp: "Anmelden",
    passwordReset: "Passwort zurücksetzen",
    multiStepSignUp: "Multi-Steps-Anmeldung",
    error404: "Fehler 404",
    error500: "Fehler 500",
    apps: "Apps",
    chat: "Plaudern",
    privateChat: "Private Chat",
    groupChat: "Privater Chat",
    drawerChat: "Gruppenchat Schubladen-Chat",
    widgets: "Widgets",
    widgetsLists: "Listen",
    widgetsStatistics: "Statistiken",
    widgetsCharts: "Diagramme",
    widgetsMixed: "Gemischt",
    widgetsTables: "Tabellen",
    widgetsFeeds: "Einspeisungen",
    changelog: "Änderungsprotokoll",
    docsAndComponents: "Dokumente & Komponenten",
    megaMenu: "Mega-Menü",
    exampleLink: "Beispiellink",
    modals: "Modale",
    general: "Allgemeines",
    inviteFriends: "Freunde Einladen",
    viewUsers: "Benutzer Anzeigen.",
    upgradePlan: "Upgrade-Plan",
    shareAndEarn: "Teilen & Verdienen",
    forms: "Formen",
    newTarget: "Neues Ziel",
    newCard: "Neue Karte",
    newAddress: "Neue Adresse",
    createAPIKey: "Api-Key Erstellen",
    twoFactorAuth: "Zwei Faktor Auth.",
    createApp: "App Erstellen",
    createAccount: "Benutzerkonto Erstellen",
    activity: "Aktivität",
    documentation: "Dokumentation",
    components: "Bauteile",
    resources: "Ressourcen",
    customers: "Kunden",
    gettingStarted: "Einstieg",
    customersListing: "Kundenauflistung",
    customerDetails: "Kundenangaben",
    calendarApp: "Kalender",
    subscriptions: "Abonnements",
    getStarted: "Einstieg",
    subscriptionList: "Abonnementliste",
    addSubscription: "Subskription Hinzufügen.",
    viewSubscription: "Abonnement Anzeigen.",
  },
  ja: {
    dashboard: "ダッシュボード",
    layoutBuilder: "レイアウトビルダー",
    craft: "作成された",
    pages: "ページ",
    profile: "プロフィール",
    profileOverview: "概要",
    projects: "プロジェクト",
    campaigns: "キャンペーン",
    documents: "書類",
    connections: "接続",
    wizards: "ウィザード",
    horizontal: "横",
    vertical: "垂直",
    account: "アカウント",
    accountOverview: "概要",
    settings: "設定",
    authentication: "認証",
    basicFlow: "基本的な流れ",
    signIn: "サインイン",
    signUp: "サインアップ",
    passwordReset: "パスワードのリセット",
    multiStepSignUp: "マルチステップサインアップ",
    error404: "エラー404",
    error500: "エラー 500",
    apps: "アプリ",
    chat: "チャット",
    privateChat: "プライベートチャット",
    groupChat: "グループチャット",
    drawerChat: "ドロワーチャット",
    widgets: "ウィジェット",
    widgetsLists: "リスト",
    widgetsStatistics: "統計",
    widgetsCharts: "チャート",
    widgetsMixed: "混合",
    widgetsTables: "テーブル",
    widgetsFeeds: "フィード",
    changelog: "変更ログ",
    docsAndComponents: "ドキュメントとコンポーネント",
    megaMenu: "メガメニュー",
    exampleLink: "リンク例",
    modals: "モーダルズ",
    general: "一般",
    inviteFriends: "友達を招待",
    viewUsers: "ユーザーを表示します",
    upgradePlan: "アップグレードプラン",
    shareAndEarn: "シェア＆稼働",
    forms: "フォーム",
    newTarget: "新しいターゲット",
    newCard: "新しいカード",
    newAddress: "新しいアドレス",
    createAPIKey: "Apiキーを作成します",
    twoFactorAuth: "2つの要因Auth",
    createApp: "アプリを作成します",
    createAccount: "アカウントを作成する",
    activity: "アクティビティ",
    documentation: "ドキュメンテーション",
    components: "コンポーネント",
    resources: "資力",
    customers: "お客様のお客様",
    gettingStarted: "入門",
    customersListing: "顧客のリスト",
    customerDetails: "お客様の詳細",
    calendarApp: "カレンダー",
    subscriptions: "購読",
    getStarted: "入門",
    subscriptionList: "サブスクリプションリスト",
    addSubscription: "サブスクリプションを追加します",
    viewSubscription: "購読を見る",
  },
  fr: {
    dashboard: "Générateur de mise",
    layoutBuilder: "En page",
    craft: "Fabriqué",
    pages: "Pages",
    profile: "Profil",
    profileOverview: "Aperçu",
    projects: "Projets",
    campaigns: "Campagnes",
    documents: "Documents",
    connections: "Connexions",
    wizards: "Sorciers",
    horizontal: "Horizontal",
    vertical: "Verticale",
    account: "Compte",
    accountOverview: "Aperçu",
    settings: "Paramètres",
    authentication: "Authentification",
    basicFlow: "Flux de base",
    signIn: "SS'identifier",
    signUp: "Inscrivez-vous",
    passwordReset: "Réinitialisation du mot de passe",
    multiStepSignUp: "S'Inscrire Multi-Étapes",
    error404: "Erreur 404",
    error500: "Erreur 500",
    apps: "Applications",
    chat: "Discuter",
    privateChat: "Discussion privée",
    groupChat: "Discussion de groupe",
    drawerChat: "Chat de tiroir",
    widgets: "Widgets",
    widgetsLists: "Listes",
    widgetsStatistics: "Statistiques",
    widgetsCharts: "Graphiques",
    widgetsMixed: "Mixte",
    widgetsTables: "Les tables",
    widgetsFeeds: "Flux",
    changelog: "Journal des modifications",
    docsAndComponents: "Documents & composants",
    megaMenu: "Méga Menu",
    exampleLink: "Exemple de lien",
    modals: "Modals",
    general: "Général",
    inviteFriends: "Inviter Des Amis",
    viewUsers: "Voir Les Utilisateurs",
    upgradePlan: "Plan De Mise À Niveau",
    shareAndEarn: "Partager Et Gagner",
    forms: "Formes",
    newTarget: "Nouvelle Cible",
    newCard: "Nouvelle Carte",
    newAddress: "Nouvelle Adresse",
    createAPIKey: "Créer Une Touche Api",
    twoFactorAuth: "Deux Facteurs D'Authentification",
    createApp: "Créer Une Application",
    createAccount: "Créer Un Compte",
    activity: "Activité",
    documentation: "Documentation",
    components: "Composants",
    resources: "Ressources",
    customers: "Les Clients",
    gettingStarted: "Commencer",
    customersListing: "Liste Des Clients",
    customerDetails: "Détails Des Clients",
    calendarApp: "Calendrier",
    subscriptions: "Abonnements",
    getStarted: "Commencer",
    subscriptionList: "Liste D'Abonnement",
    addSubscription: "Ajouter Un Abonnement",
    viewSubscription: "Voir L'Abonnement",
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "bn",
  globalInjection: true,
  messages,
});

export default i18n;
