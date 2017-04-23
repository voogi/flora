package hu.voga.config;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers(HttpMethod.GET, "/api/newsletter/**", "/api/volunteer").authenticated()
                .antMatchers(HttpMethod.POST, "/api/colleague/**", "/api/event/**" , "/api/knowledge/**" , "/api/news/**").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/colleague/**", "/api/event/**" , "/api/knowledge/**" , "/api/news/**").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/colleague/**", "/api/event/**" , "/api/knowledge/**" , "/api/news/**").authenticated()
                .antMatchers(HttpMethod.GET, "/login", "/api/colleague/**", "/api/event/**" , "/api/knowledge/**" , "/api/news/**").permitAll()
                .and()
                .csrf().disable()
                .httpBasic();
    }
}