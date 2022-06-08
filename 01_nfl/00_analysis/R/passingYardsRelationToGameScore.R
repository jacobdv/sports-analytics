library(tidyverse)
library(ggrepel)
library(ggimage)
library(nflfastR)
options(scipen=9999)

singleSeason <- load_pbp(2021)
completedPasses <- singleSeason %>% filter(play_type == 'pass' & !is.na(receiving_yards))

leading <- completedPasses %>% filter(posteam_score > defteam_score)
tied <- completedPasses %>% filter(posteam_score == defteam_score)
trailing <- completedPasses %>% filter(posteam_score < defteam_score)