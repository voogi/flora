package hu.voga.config;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/colleague/**", "/api/event/**" , "/api/knowledge/**" , "/api/news/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/newsletter").permitAll()
                .antMatchers("/login").permitAll()
                .anyRequest().authenticated()
                .and()
                .csrf().disable()
                .httpBasic();
    }
}