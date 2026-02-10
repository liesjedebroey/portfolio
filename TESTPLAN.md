# TESTPLAN – Portfolio Website
Author: Annelies Debroey  
Role: Software Test Engineer & Developer  
Project: Personal Portfolio Website  
Version: 1.0  

---

## 1. Introduction
This document describes the test approach, scope, risks, environments, and test activities for validating the personal portfolio website of **Annelies Debroey**, built in HTML, CSS, and JavaScript.

The goal of this test plan is to ensure:
- Functional correctness  
- Cross-browser compatibility  
- Responsive behavior  
- Accessibility  
- Performance stability  
- High‑quality user experience  

---

## 2. Scope

### 2.1 In Scope
- Navigation & smooth scrolling  
- Section reveal animations  
- Project card expand/collapse  
- Skills progress bar animation  
- Responsive layout on desktop, tablet, mobile  
- Cross-browser rendering  
- Performance metrics (Lighthouse)  
- Accessibility (WCAG basic)  

### 2.2 Out of Scope
- Backend validations (none present)  
- Form submissions (unless added later)  
- SEO Optimization (future improvement)  

---

## 3. Test Items
The following components will be tested:
- index.html  
- style.css  
- main.js  
- Images & assets (if added later)  

---

## 4. Test Approach

### 4.1 Functional Testing
Black-box manual testing based on user flows:
- Navigation
- Section scrolling
- Project interaction
- Animation triggers

### 4.2 Exploratory Testing
Unscripted sessions focusing on:
- Edge cases  
- Fast user actions  
- Device resizing  
- Stress interactions  

### 4.3 Cross-Browser Testing
Browsers:
- Chrome  
- Firefox  
- Edge  
- Safari (if available)

### 4.4 Responsive Testing
Devices:
- Desktop (≥1200px)  
- Tablet (768–1024px)  
- Mobile (375–425px)  

### 4.5 Accessibility Testing
- Keyboard navigation  
- Contrast ratio  
- Focus indicators  
- Logical HTML structure  

### 4.6 Performance Testing
Tools:
- Chrome DevTools → Lighthouse  
- Network throttling (Fast 3G simulation)  

---

## 5. Test Environment

### 5.1 Hardware
- Windows / macOS laptop  
- Optional: smartphone for physical mobile tests  

### 5.2 Software
- Chrome DevTools  
- Firefox Developer Edition  
- Edge  
- GitHub Pages hosting  
- Extensions:  
  - AXE accessibility tester (optional)  

---

## 6. Test Deliverables
- TESTING.md checklist  
- Bug reports (GitHub Issues)  
- Screenshots (if required)  
- Test summary report (optional)  

---

## 7. Entry / Exit Criteria

### Entry Criteria
- Deployed version available on GitHub Pages  
- All code committed to main branch  

### Exit Criteria
- No open high-severity bugs  
- All test cases in TESTING.md executed  
- No regressions in core functionality  

---

## 8. Risks
- Performance variations on older mobile devices  
- Browser inconsistencies for smooth scrolling  
- Animations may cause layout shifts  

---

## 9. Approval
Approved by: **Annelies Debroey**  
Date: *<insert date>*  

``