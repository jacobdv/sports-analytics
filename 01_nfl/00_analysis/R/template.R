library(tidyverse)
library(ggrepel)
library(ggimage)
library(nflfastR)
options(scipen=9999)

data <- load_pbp(2021)