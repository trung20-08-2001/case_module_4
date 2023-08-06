package com.config;

import com.config.filter.JwtAuthenticationFilter;
import com.service.IAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    IAccountService iAccountService;
    @Autowired
    JwtAuthenticationFilter jwtAuthenticationFilter;
    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/login", "/register/client","/register/shop","/user**").permitAll()
                .and().authorizeRequests().antMatchers("/admin","/admin/findShopAccount","admin/findUserAccount"
                        ,"/admin/findShopBlock","/admin/block/{id}","/admin/shopPending","/admin/activeShop/{id}"
                        ,"/products","/products/productPending/{id}","/products/confirmProduct/{id}","/products/refuseProduct/{id}"
                        ,"/categories","/categories/","/admin/revenues","/admin/revenues/revenueByMonthYear/{month}/{year}"
                        ,"/admin/revenues/revenueByYear/{year}","/admin/revenues/revenueMonthMax/{year}","/admin/accountByUser"
                        ,"/admin/shopActive","/admin/allUserBlock","/admin/findUserActive/{id}","/admin/findUserBlock/{id}"
                        ,"/admin/findShopActive/{id}","/admin/findShopBlock/{id}","/admin/getNewUser").hasRole("ADMIN")
                .and().authorizeRequests().antMatchers("/shop**").hasRole("SHOP")
                .anyRequest().authenticated()
                .and().csrf().disable();
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling();
        http.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(iAccountService).passwordEncoder(NoOpPasswordEncoder.getInstance());

    }
}
