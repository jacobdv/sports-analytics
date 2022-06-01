# Import dependencies
from splinter import Browser
from bs4 import BeautifulSoup as soup
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import datetime as dt

def scrape():
    executable_path = {'executable_path': ChromeDriverManager().install()}
    browser = Browser('chrome', **executable_path, headless=True)
    getStandings(browser)

def getStandings(browser): 
    url = 'https://www.nfl.com/standings/'
    browser.visit(url)

    html = browser.html
    standingsPage = soup(html, 'html.parser')
        
    divisions = getDivisions(standingsPage)
    standings = {}
    for division in range(0,1):#len(divisions)):
        eachDivision = list(standingsPage.findAll('tbody'))[division]
        arrayofteams = (eachDivision.find_all_next('div',class_='d3-o-club-fullname'))
        for x in arrayofteams:
            print(x.text.replace('\n','').replace(' ',''))
            
def getDivisions(standingsPage): 
    divisionsArray = []
    for section in standingsPage.findAll('table', class_='d3-o-table'):
        division = section.thead.tr.th.text.replace('\n','').replace(' ','').replace('C','C ')
        divisionsArray.append(division)
    return divisionsArray
        
    
    
scrape()