import { Component, Input, Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
import { ProductImagesComponent } from './product-images.component';
